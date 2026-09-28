"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

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

interface IWGlobeProps {
  /** GeoJSON FeatureCollection of countries (Natural Earth `ADMIN` names). */
  countriesUrl?: string;
  /** `ADMIN` names of the countries drawn at full opacity. */
  highlighted?: string[];
  /** H3 resolution, 0-15. Lower = larger hexagons. */
  resolution?: number;
  /** Gap between hexagons, as a fraction of hexagon diameter. */
  margin?: number;
  onCountrySelect?: (country: Country | null) => void;
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
/*  Visual tokens: everything is white, only opacity changes                  */
/* -------------------------------------------------------------------------- */

const white = (alpha: number) => `rgba(255,255,255,${alpha})`;

const HIGHLIGHT_OPACITY = 1;
const COUNTRY_OPACITY = 0.5;
const OCEAN_OPACITY = 0.5;

const SPACE = white(0);
const ATMOSPHERE = white(1);

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
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function IWGlobe({
  countriesUrl = COUNTRIES_URL,
  highlighted = HIGHLIGHTED_COUNTRIES,
  resolution = 3,
  margin = 0.25,
  onCountrySelect,
}: IWGlobeProps = {}) {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  const [size, setSize] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadFailed, setLoadFailed] = useState(false);
  const [hovered, setHovered] = useState<Country | null>(null);
  const [selected, setSelected] = useState<Country | null>(null);

  const highlightSet = useMemo(() => new Set(highlighted), [highlighted]);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Load country polygons.
  useEffect(() => {
    const controller = new AbortController();
    fetch(countriesUrl, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<CountryCollection>;
      })
      .then((data) => {
        setCountries(data.features);
        setLoadFailed(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setLoadFailed(true);
      });
    return () => controller.abort();
  }, [countriesUrl]);

  // Track container size so the canvas stays responsive.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.floor(width), height: Math.floor(height) });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // One-time camera, lighting and material setup once the WebGL scene exists.
  const handleGlobeReady = useCallback(() => {
    const globe = globeRef.current;
    if (!globe) return;

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

  return (
    <div
      ref={containerRef}
      className="opacity-50 h-screen w-full pointer-events-none invert dark:invert-0"
    >
      {size.width > 0 && size.height > 0 && (
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
          hexPolygonsTransitionDuration={prefersReducedMotion ? 0 : 250}
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
        />
      )}
    </div>
  );
}
