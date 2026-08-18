"use client";

import { Background } from "@julscodes/blob-background";
import "@julscodes/blob-background/styles.css";
import { ParticlesComponent } from "./particles";

export default function IWBg() {
  return (
    <div className="absolute top-0 left-0 w-full h-full ">
      <ParticlesComponent id="landing-particles" color="#000" />
      <Background
        dark
        colors={["#dd272d", "#dd272d", "#dd272d"]}
        size="500px"
        speed={0.6}
        fixed
      />{" "}
    </div>
  );
}
