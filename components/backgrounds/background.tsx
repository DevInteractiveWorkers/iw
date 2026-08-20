"use client";

import { ParticlesComponent } from "../particles";
import MoltenMetal from "./MoltenMetal";

export default function IWBg() {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
      style={{
        // Fades out smoothly on both the top and bottom edges
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
      }}
    >
      <ParticlesComponent id="landing-particles" color="#000" />
      <MoltenMetal
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
      />
    </div>
  );
}
