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

/** A point of interest drawn as a marker on the globe. */
export interface HighlightedLocation {
  name: string;
  code: string;
  latitude: number;
  longitude: number;
  /** Always shown above the marker. Without it, hovering shows `name`. */
  content?: React.ReactNode;
}

export interface IWGlobeProps {
  /** Locations drawn as markers, with pinned `content` or a hover name tag. */
  highlightedLocations?: HighlightedLocation[];
  countriesUrl?: string;
  highlighted?: string[];
  resolution?: number;
  margin?: number;
  onCountrySelect?: (country: Country | null) => void;
  dark?: boolean;
  autoRotate?: boolean;
  /**
   * Gentle back-and-forth tilt around the initial view, so highlighted
   * countries stay in frame. Only runs when `autoRotate` is false.
   */
  sway?: boolean;
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

/* ---- Highlighted locations ---------------------------------------------- */

const NO_LOCATIONS: HighlightedLocation[] = [];

/** Above SELECTED_ALTITUDE so a raised country never covers a marker. */
const LOCATION_ALTITUDE = 0.08;
/** Gap between the marker and the bottom of its tag, in px. */
const TAG_OFFSET_PX = 14;

const hasContent = (location: HighlightedLocation) => location.content != null;

const locationLat = (d: object) => (d as HighlightedLocation).latitude;
const locationLng = (d: object) => (d as HighlightedLocation).longitude;

/** Countries handed to the globe per idle slice while it builds hexagons. */
const HEX_BATCH_SIZE = 16;
const RETRY_DELAY_MS = 1500;

const BASE_ALTITUDE = 0.008;
const SELECTED_ALTITUDE = 0.07;

const INITIAL_VIEW = { lat: 20, lng: -75, altitude: 2.3 };

/* Sway: two slow sine waves with different periods trace a small, never
   repeating-looking orbit around INITIAL_VIEW instead of a full spin. */
const SWAY_LNG_DEG = 8;
const SWAY_LAT_DEG = 3;
const SWAY_LNG_PERIOD_S = 18;
const SWAY_LAT_PERIOD_S = 11;

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
  highlightedLocations = NO_LOCATIONS,
  countriesUrl = COUNTRIES_URL,
  highlighted = HIGHLIGHTED_COUNTRIES,
  resolution = 3,
  margin = 0.25,
  onCountrySelect,
  dark = false,
  autoRotate = false,
  sway = false,
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
  const [selected, setSelected] = useState<Country | null>(null);
  const [hoveredLocation, setHoveredLocation] =
    useState<HighlightedLocation | null>(null);

  const markerEls = useRef(new Map<HighlightedLocation, HTMLElement>());
  const overlayEls = useRef(new Map<HighlightedLocation, HTMLDivElement>());

  // Locations with `content` are always pinned; the rest get a hover tag.
  const pinnedLocations = useMemo(
    () => highlightedLocations.filter(hasContent),
    [highlightedLocations],
  );
  const tagLocation =
    hoveredLocation && !hasContent(hoveredLocation) ? hoveredLocation : null;
  const overlayLocations = useMemo(
    () => (tagLocation ? [...pinnedLocations, tagLocation] : pinnedLocations),
    [pinnedLocations, tagLocation],
  );

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
    globe.pointOfView(INITIAL_VIEW, 0);

    const controls = globe.controls();
    controls.autoRotate = autoRotate ?? !prefersReducedMotion;
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

  // Sway: drive the camera around INITIAL_VIEW. Starts at the initial view
  // (sin 0 = 0) so there's no jump; paused while a country is selected.
  useEffect(() => {
    const globe = globeRef.current;
    if (!sway || autoRotate || prefersReducedMotion) return;
    if (!globeReady || !globe || selected) return;

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = (now - start) / 1000;
      globe.pointOfView(
        {
          lat:
            INITIAL_VIEW.lat +
            SWAY_LAT_DEG * Math.sin((2 * Math.PI * t) / SWAY_LAT_PERIOD_S),
          lng:
            INITIAL_VIEW.lng +
            SWAY_LNG_DEG * Math.sin((2 * Math.PI * t) / SWAY_LNG_PERIOD_S),
          altitude: INITIAL_VIEW.altitude,
        },
        0,
      );
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [sway, autoRotate, prefersReducedMotion, globeReady, selected]);

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
    (d: object) =>
      selected?.properties.ADMIN === (d as Country).properties.ADMIN
        ? SELECTED_ALTITUDE
        : BASE_ALTITUDE,
    [selected],
  );

  /* ---- Highlighted-location markers -------------------------------------- */

  // DOM markers (globe.gl HTML layer) opt back into pointer events, so they are
  // hoverable while the rest of the globe stays click-through for page scroll.
  // Created once per location; globe.gl hides them on the far side of the globe.
  const locationMarker = useCallback((d: object) => {
    const location = d as HighlightedLocation;
    const el = document.createElement("div");
    el.className = "pointer-events-auto cursor-pointer p-2 group";
    el.innerHTML =
      '<span class="block size-3 rounded-full bg-white ring-4 ring-white/40 transition-transform duration-200 group-hover:scale-150 motion-reduce:transition-none"></span>';

    // Mouse: tag follows hover. Touch/pen (no hover): tap toggles the tag.
    let pointerType = "mouse";
    el.addEventListener("pointerdown", (e) => (pointerType = e.pointerType));
    el.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "mouse") setHoveredLocation(location);
    });
    el.addEventListener("pointerleave", (e) => {
      if (e.pointerType === "mouse")
        setHoveredLocation((prev) => (prev === location ? null : prev));
    });
    el.addEventListener("click", () => {
      if (pointerType !== "mouse")
        setHoveredLocation((prev) => (prev === location ? null : location));
    });

    markerEls.current.set(location, el);
    return el;
  }, []);

  // Drop the hover if its location disappears from the props.
  useEffect(() => {
    setHoveredLocation((prev) =>
      prev && highlightedLocations.includes(prev) ? prev : null,
    );
  }, [highlightedLocations]);

  // Keep every overlay (pinned content + hover tag) above its marker. One
  // projection per overlay per frame, only while there is something to show
  // (the globe may rotate or resize). Overlays hide with their marker when it
  // rotates behind the globe.
  useEffect(() => {
    const globe = globeRef.current;
    if (!globeReady || !globe || overlayLocations.length === 0) return;

    let frame = 0;
    const place = () => {
      for (const location of overlayLocations) {
        const el = overlayEls.current.get(location);
        if (!el) continue;
        if (markerEls.current.get(location)?.style.display === "none") {
          el.style.visibility = "hidden";
          continue;
        }
        const { x, y } = globe.getScreenCoords(
          location.latitude,
          location.longitude,
          LOCATION_ALTITUDE,
        );
        el.style.transform = `translate(${x}px, ${y}px) translate(-50%, calc(-100% - ${TAG_OFFSET_PX}px))`;
        el.style.visibility = "visible";
      }
      frame = requestAnimationFrame(place);
    };
    place();

    return () => cancelAnimationFrame(frame);
  }, [globeReady, overlayLocations]);

  const status = loadFailed ? "error" : revealed ? "ready" : "loading";

  return (
    <div
      ref={containerRef}
      data-globe-state={status}
      className="relative md:h-screen h-[60vh] w-dvw"
    >
      <div
        aria-hidden="true"
        className={`opacity-100 h-full w-full pointer-events-none transition-[filter] duration-700 ease-in-out motion-reduce:transition-none ${dark ? "invert-0" : "invert opacity-25"}`}
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
              htmlElementsData={highlightedLocations}
              htmlLat={locationLat}
              htmlLng={locationLng}
              htmlAltitude={LOCATION_ALTITUDE}
              htmlElement={locationMarker}
              htmlTransitionDuration={0}
            />
          )}
        </div>
      </div>
      {/* Overlays sit outside the faded/inverted layer so they stay legible,
          and fade in with the globe. Pinned content keeps its own pointer
          events; the hover name tag is decorative. */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${status === "ready" ? "opacity-100" : "opacity-0"}`}
      >
        {overlayLocations.map((location) => {
          const pinned = hasContent(location);
          return (
            <div
              key={location.code}
              ref={(el) => {
                if (el) overlayEls.current.set(location, el);
                else overlayEls.current.delete(location);
              }}
              aria-hidden={pinned ? undefined : true}
              // Raised while hovered, either directly or via its marker.
              className={`invisible absolute left-0 top-0 hover:z-20 focus-within:z-20 ${location === hoveredLocation ? "z-20" : "z-0"} ${pinned ? "pointer-events-auto" : ""}`}
            >
              {pinned ? location.content : location.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
