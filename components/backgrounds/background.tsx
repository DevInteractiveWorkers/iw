"use client";

import { usePathname } from "next/navigation";
import DotField from "../DotField";
import ColorBends from "./ColorBends";
import "@julscodes/blob-background/styles.css";
import LightRays from "./LightRays";

export default function IWBg() {
  const pathname = usePathname();

  if (pathname === "/policy") return;

  if (pathname === "/pricing")
    return (
      <div className="absolute top-0 left-0 -z-10 w-full h-screen">
        <div className="absolute top-0 left-0 -z-10 w-full h-screen">
          <LightRays />
        </div>
        <LightRays raysColor="#dd272d" />
      </div>
    );

  return (
    <BackgroundWrapper>
      {/* <ParticlesComponent id="landing-particles" color="#000" /> */}
      {/* <MoltenMetal
        color1="#C1272D"
        color2="#C1272D"
        color3="#e32828"
        colorMode="molten"
        speed={0.35}
        scale={4}
        detail={3}
        glow={1.6}
        coreSize={0.1}
        swirl={1}
        fold={-0.2}
        blackPoint={0.05}
        brightness={1.3}
        opacity={1}
        grain
        grainIntensity={0.05}
        mouseInteraction
        mouseStrength={0.3}
      /> */}
      <ColorBends
        rotation={95}
        speed={0.2}
        colors={["#C1272D", "#DD272D", "#C1272D"]}
        transparent
        autoRotate={0}
        scale={1.2}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.4}
        parallax={0.3}
        noise={0.15}
        iterations={1}
        intensity={1.3}
        bandWidth={6}
      />
    </BackgroundWrapper>
  );
}

function BackgroundWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden bg-transparent"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          cursorRadius={700}
          cursorForce={0.42}
          bulgeOnly
          bulgeStrength={42}
          glowRadius={140}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgb(255, 255, 255, 0.5)"
          gradientTo="rgb(255, 255, 255, 0.5)"
          glowColor="#000000"
        />
      </div>
      {children}
    </div>
  );
}
