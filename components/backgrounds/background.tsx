"use client";

import { Background } from "@julscodes/blob-background";
import "@julscodes/blob-background/styles.css";
import { ParticlesComponent } from "../particles";
import DarkVeil from "@/app/components/backgrounds/DarkVeil";

export default function IWBg() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <ParticlesComponent id="landing-particles" color="#000" />
      <DarkVeil
        hueShift={-115}
        noiseIntensity={0.06}
        scanlineIntensity={0.15}
        speed={1}
        scanlineFrequency={0}
        warpAmount={0.45}
        resolutionScale={1}
      />
      {/* <Background
        dark
        colors={["#dd272d", "#dd272d", "#dd272d"]}
        size="500px"
        speed={0.6}
        fixed
      />{" "} */}
    </div>
  );
}
