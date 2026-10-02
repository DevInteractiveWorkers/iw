"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { whenIdle } from "./idle";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type Position = [lng: number, lat: number];

interface PolygonGeometry {
  type: "Polygon";
  coordinates: Position[][];
}

interface MultiPolygonGeometry {
  type: "MultiPolygon";
  coordinates: Position[][][];
}

/** Natural Earth country feature (only the fields this component reads). */
export interface Country {
  type: "Feature";
  properties: {
    ADMIN: string;
    NAME: string;
  };
  geometry: PolygonGeometry | MultiPolygonGeometry;
}

interface CountryCollection {
  features: Country[];
}

export interface IWGlobeProps {
  /** GeoJSON FeatureCollection of countries (Natural Earth `ADMIN` names). */
  countriesUrl?: string;
  /** `ADMIN` names of the countries drawn at full opacity. */
  highlighted?: string[];
  /** H3 resolution, 0-15. Lower = larger hexagons. */
  resolution?: number;
  /** Gap between hexagons, as a fraction of hexagon diameter. */
  margin?: number;
  onCountrySelect?: (country: Country | null) => void;
  dark?: boolean;
}

/* -------------------------------------------------------------------------- */
/*  Config                                                                    */
/* -------------------------------------------------------------------------- */

const COUNTRIES_URL =
  "https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson";

const HIGHLIGHTED_COUNTRIES = [
  "Venezuela",
  "United States of America",
  "Canada",
];

/* -------------------------------------------------------------------------- */
/*  Airline routes: hub country -> every other highlighted country            */
/* -------------------------------------------------------------------------- */

interface Airport {
  iata: string;
  lat: number;
  lng: number;
}

interface Route {
  src: Airport;
  dst: Airport;
  /** Fixed per route so dashes stay staggered across re-renders. */
  dashInitialGap: number;
}

const HUB_COUNTRY = "Venezuela";

/** Major airports per country, keyed by Natural Earth `ADMIN` name. */
const AIRPORTS: Record<string, Airport[]> = {
  Venezuela: [
    { iata: "MAR", lat: 10.5582, lng: -71.7279 }, // Maracaibo
  ],
  "United States of America": [
    { iata: "MIA", lat: 25.7959, lng: -80.287 }, // Miami
    { iata: "JFK", lat: 40.6413, lng: -73.7781 }, // New York
    { iata: "IAH", lat: 29.9902, lng: -95.3368 }, // Houston
    { iata: "MCO", lat: 28.4312, lng: -81.3081 }, // Orlando
    { iata: "LAX", lat: 33.9416, lng: -118.4085 }, // Los Angeles
  ],
  Canada: [
    { iata: "YYZ", lat: 43.6777, lng: -79.6248 }, // Toronto
    { iata: "YUL", lat: 45.4706, lng: -73.7408 }, // Montreal
    { iata: "YVR", lat: 49.1967, lng: -123.1815 }, // Vancouver
    { iata: "YYC", lat: 51.1215, lng: -114.0076 }, // Calgary
    { iata: "YOW", lat: 45.3225, lng: -75.6692 }, // Ottawa
  ],
};

/** One arc per destination airport, fanned out across the hub's airports. */
function buildRoutes(highlighted: string[]): Route[] {
  const hubAirports = AIRPORTS[HUB_COUNTRY];
  if (!hubAirports || !highlighted.includes(HUB_COUNTRY)) return [];
  return highlighted
    .filter((name) => name !== HUB_COUNTRY)
    .flatMap((name) => AIRPORTS[name] ?? [])
    .map((dst, i) => ({
      src: hubAirports[i % hubAirports.length],
      dst,
      // Golden-ratio spread: evenly staggered, deterministic.
      dashInitialGap: (i * 0.618034) % 1,
    }));
}

/* -------------------------------------------------------------------------- */
/*  Visual tokens: everything is white, only opacity changes                  */
/* -------------------------------------------------------------------------- */

const white = (alpha: number) => `rgba(255,255,255,${alpha})`;

const HIGHLIGHT_OPACITY = 0.5;
const COUNTRY_OPACITY = 0.25;
const OCEAN_OPACITY = 0.5;

const SPACE = white(0);
const ATMOSPHERE = white(1);

/** Bright at the hub, fading toward the destination (shows direction). */
const ARC_COLORS = [white(0.75), white(0.75)];
const AIRPORT_COLOR = white(1);
const pointColor = () => AIRPORT_COLOR;
const AIRPORT_RADIUS = 0.12;

// Stable accessors so the arc/point layers don't re-digest on every render.
const arcStartLat = (d: object) => (d as Route).src.lat;
const arcStartLng = (d: object) => (d as Route).src.lng;
const arcEndLat = (d: object) => (d as Route).dst.lat;
const arcEndLng = (d: object) => (d as Route).dst.lng;
const arcColor = () => ARC_COLORS;
const arcDashInitialGap = (d: object) => (d as Route).dashInitialGap;
const pointLat = (d: object) => (d as Airport).lat;
const pointLng = (d: object) => (d as Airport).lng;

/** Countries handed to the globe per idle slice while it builds hexagons. */
const HEX_BATCH_SIZE = 16;
const RETRY_DELAY_MS = 1500;

const BASE_ALTITUDE = 0.008;
const HOVER_ALTITUDE = 0.045;
const SELECTED_ALTITUDE = 0.07;

/** Rough label point: bounding-box center of the country's largest polygon. */
function labelPoint(country: Country): { lat: number; lng: number } {
  const { geometry } = country;
  const polygons =
    geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  const largest = polygons.reduce((best, poly) =>
    poly[0].length > best[0].length ? poly : best,
  );
  const lngs = largest[0].map((p) => p[0]);
  const lats = largest[0].map((p) => p[1]);
  return {
    lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
    lat: (Math.min(...lats) + Math.max(...lats)) / 2,
  };
}

/* -------------------------------------------------------------------------- */
/*  Data loading                                                              */
/* -------------------------------------------------------------------------- */

/** Keeps only the fields this component reads, so the raw GeoJSON can be GC'd. */
function toCountry({ properties, geometry }: Country): Country {
  return {
    type: "Feature",
    properties: { ADMIN: properties.ADMIN, NAME: properties.NAME },
    geometry,
  };
}

async function fetchCountries(url: string, retries = 1): Promise<Country[]> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as CountryCollection;
    if (!Array.isArray(data?.features)) throw new Error("Invalid GeoJSON");
    return data.features.map(toCountry);
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    return fetchCountries(url, retries - 1);
  }
}

/** One request per URL across remounts; failures are evicted so they can retry. */
const countriesCache = new Map<string, Promise<Country[]>>();

function loadCountries(url: string): Promise<Country[]> {
  let promise = countriesCache.get(url);
  if (!promise) {
    promise = fetchCountries(url);
    promise.catch(() => countriesCache.delete(url));
    countriesCache.set(url, promise);
  }
  return promise;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function IWGlobe({
  countriesUrl = COUNTRIES_URL,
  highlighted = HIGHLIGHTED_COUNTRIES,
  resolution = 3,
  margin = 0.25,
  onCountrySelect,
  dark = false,
}: IWGlobeProps = {}) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const rendererRef = useRef<ReturnType<GlobeMethods["renderer"]> | null>(null);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [allCountries, setAllCountries] = useState<Country[] | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [globeReady, setGlobeReady] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [hovered, setHovered] = useState<Country | null>(null);
  const [selected, setSelected] = useState<Country | null>(null);

  const highlightSet = useMemo(() => new Set(highlighted), [highlighted]);

  const routes = useMemo(() => buildRoutes(highlighted), [highlighted]);
  const airports = useMemo(
    () => Array.from(new Set(routes.flatMap((r) => [r.src, r.dst]))),
    [routes],
  );

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Load country polygons (shared, retried once, failure surfaced as state).
  useEffect(() => {
    let cancelled = false;
    setAllCountries(null);
    setVisibleCount(0);
    setRevealed(false);
    setLoadFailed(false);
    loadCountries(countriesUrl).then(
      (data) => {
        if (!cancelled) setAllCountries(data);
      },
      (err) => {
        if (cancelled) return;
        if (process.env.NODE_ENV !== "production") {
          console.warn("[IWGlobe] Failed to load countries:", err);
        }
        setLoadFailed(true);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [countriesUrl]);

  // Highlighted countries first, so the important hexes are built earliest.
  const orderedCountries = useMemo(() => {
    if (!allCountries) return null;
    const first: Country[] = [];
    const rest: Country[] = [];
    allCountries.forEach((c) =>
      (highlightSet.has(c.properties.ADMIN) ? first : rest).push(c),
    );
    return first.concat(rest);
  }, [allCountries, highlightSet]);

  // three-globe builds H3 cells + geometry synchronously per country, so feed it
  // small batches in idle time instead of all ~180 countries in one long task.
  // Already-built countries are memoized by the library and not recomputed.
  useEffect(() => {
    if (!globeReady || !orderedCountries) return;
    if (visibleCount < orderedCountries.length) {
      return whenIdle(() =>
        setVisibleCount((n) =>
          Math.min(n + HEX_BATCH_SIZE, orderedCountries.length),
        ),
      );
    }
    if (!revealed) return whenIdle(() => setRevealed(true));
  }, [globeReady, orderedCountries, visibleCount, revealed]);

  const countries = useMemo(
    () => orderedCountries?.slice(0, visibleCount) ?? [],
    [orderedCountries, visibleCount],
  );

  // Release the WebGL context on real unmount. The library disposes the
  // renderer itself; forcing context loss frees the GPU slot immediately.
  // Deferred + guarded so React Strict Mode's simulated unmount is a no-op.
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      setTimeout(() => {
        if (mountedRef.current) return;
        rendererRef.current?.forceContextLoss();
        rendererRef.current = null;
      }, 0);
    };
  }, []);

  // Track container size so the canvas stays responsive.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = Math.floor(entry.contentRect.width);
      const height = Math.floor(entry.contentRect.height);
      setSize((prev) =>
        prev.width === width && prev.height === height
          ? prev
          : { width, height },
      );
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // One-time camera, lighting and material setup once the WebGL scene exists.
  const handleGlobeReady = useCallback(() => {
    const globe = globeRef.current;
    if (!globe) return;

    rendererRef.current = globe.renderer();
    setGlobeReady(true);
    globe.pointOfView({ lat: 20, lng: -75, altitude: 2.3 }, 0);

    const controls = globe.controls();
    controls.autoRotate = !prefersReducedMotion;
    controls.autoRotateSpeed = 0.35;
    controls.enableDamping = true;
    controls.minDistance = 160;
    controls.maxDistance = 600;

    // The public `GlobeMethods` type doesn't include these in all versions,
    // so they are accessed through a narrow structural cast.
    const instance = globe as typeof globe & {
      lights?: () => Array<{
        type: string;
        intensity: number;
        color: { set: (c: string) => void };
      }>;
      globeMaterial?: () => {
        color: { set: (c: string) => void };
        emissive: { set: (c: string) => void };
        emissiveIntensity: number;
        transparent: boolean;
        opacity: number;
      };
    };

    // Flat, shadowless lighting so white stays pure white on every face.
    instance.lights?.().forEach((light) => {
      if (light.type === "AmbientLight") {
        light.color.set("#ffffff");
        light.intensity = Math.PI;
      } else {
        light.intensity = 0;
      }
    });

    // Ocean: white at 50% opacity, self-lit so lighting can't tint it.
    const material = instance.globeMaterial?.();
    if (!material) return;
    material.color.set("#ffffff");
    material.emissive.set("#ffffff");
    material.emissiveIntensity = 1;
    material.transparent = true;
    material.opacity = OCEAN_OPACITY;
  }, [prefersReducedMotion]);

  const select = useCallback(
    (country: Country | null) => {
      setSelected(country);
      onCountrySelect?.(country);
      const globe = globeRef.current;
      if (!globe) return;
      // Pause the idle spin while a country is pinned.
      globe.controls().autoRotate = !country && !prefersReducedMotion;
      if (country) {
        globe.pointOfView(
          { ...labelPoint(country), altitude: 1.6 },
          prefersReducedMotion ? 0 : 900,
        );
      }
    },
    [onCountrySelect, prefersReducedMotion],
  );

  /* ---- Hexed-polygon accessors ------------------------------------------ */

  const hexColor = useCallback(
    (d: object) =>
      white(
        highlightSet.has((d as Country).properties.ADMIN)
          ? HIGHLIGHT_OPACITY
          : COUNTRY_OPACITY,
      ),
    [highlightSet],
  );

  const hexAltitude = useCallback(
    (d: object) => {
      const country = d as Country;
      if (selected?.properties.ADMIN === country.properties.ADMIN)
        return SELECTED_ALTITUDE;
      if (hovered?.properties.ADMIN === country.properties.ADMIN)
        return HOVER_ALTITUDE;
      return BASE_ALTITUDE;
    },
    [hovered, selected],
  );

  const status = loadFailed ? "error" : revealed ? "ready" : "loading";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-globe-state={status}
      className={`opacity-100 h-screen w-full pointer-events-none transition-[filter] duration-700 ease-in-out motion-reduce:transition-none ${dark ? "invert-0" : "invert opacity-25"}`}
    >
      {/* Fade in once every batch is built. On failure the Globe unmounts
          (freeing WebGL) and the reserved space simply stays empty. */}
      <div
        className={`h-full w-full transition-opacity duration-1000 ease-out motion-reduce:transition-none ${status === "ready" ? "opacity-100" : "opacity-0"}`}
      >
        {!loadFailed && size.width > 0 && size.height > 0 && (
          <Globe
            ref={globeRef}
            width={size.width}
            height={size.height}
            backgroundColor={SPACE}
            showAtmosphere
            atmosphereColor={ATMOSPHERE}
            atmosphereAltitude={0.18}
            onGlobeReady={handleGlobeReady}
            hexPolygonsData={countries}
            showGlobe={false}
            //   hexPolygonGeoJsonGeometry={(d: object) => (d as Country).geometry}
            hexPolygonColor={hexColor}
            hexPolygonAltitude={hexAltitude}
            hexPolygonResolution={resolution}
            hexPolygonMargin={margin}
            // No per-frame geometry tweening while batches stream in hidden.
            hexPolygonsTransitionDuration={
              revealed && !prefersReducedMotion ? 250 : 0
            }
            onHexPolygonHover={(polygon) =>
              setHovered((polygon as Country | null) ?? null)
            }
            onHexPolygonClick={(polygon) => {
              const country = polygon as Country;
              select(
                selected?.properties.ADMIN === country.properties.ADMIN
                  ? null
                  : country,
              );
            }}
            onHexPolygonRightClick={() => select(null)}
            // Airline routes (styled after globe.gl's airline-routes example).
            // Reduced motion: solid, static arcs instead of travelling dashes.
            arcsData={routes}
            arcStartLat={arcStartLat}
            arcStartLng={arcStartLng}
            arcEndLat={arcEndLat}
            arcEndLng={arcEndLng}
            arcColor={dark ? arcColor : [white(0), white(0)]}
            arcDashLength={prefersReducedMotion ? 1 : 1}
            arcDashGap={prefersReducedMotion ? 0 : 1}
            arcDashInitialGap={arcDashInitialGap}
            arcDashAnimateTime={prefersReducedMotion ? 0 : 4000}
            arcsTransitionDuration={0}
            pointsData={airports}
            pointLat={pointLat}
            pointLng={pointLng}
            pointColor={pointColor}
            pointAltitude={0}
            pointRadius={AIRPORT_RADIUS}
            pointsMerge
          />
        )}
      </div>
    </div>
  );
}
