import React from "react";

export function WaveToLight() {
  return (
    <div className="w-full overflow-hidden leading-none select-none -mb-[1px]">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 C 480 80, 960 80, 1440 0 L 1440 80 L 0 80 Z"
          fill="#F4F2FF"
        />
      </svg>
    </div>
  );
}

export function WaveToBlue() {
  return (
    <div className="w-full overflow-hidden leading-none select-none -mb-[1px]">
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 C 480 80, 960 80, 1440 0 L 1440 80 L 0 80 Z"
          fill="#5546FF"
        />
      </svg>
    </div>
  );
}
