"use client";

// Component added by Ansh - github.com/ansh-dhanani

import GradualBlur from "./GradualBlur";

const Blured = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none select-none">
      <div className="absolute bottom-0 left-0 w-full h-[50vh]">
        <div
          style={{ height: "100%", overflowY: "auto", padding: "6rem 2rem" }}
        ></div>

        <GradualBlur
          target="parent"
          position="bottom"
          height="20vh"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential
          opacity={1}
        />
      </div>
    </div>
  );
};

export default Blured;
