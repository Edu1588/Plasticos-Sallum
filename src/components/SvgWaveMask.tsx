import React from "react";

interface SvgWaveMaskProps {
  fillColor?: string;
  className?: string;
  inverted?: boolean;
}

export function SvgWaveMask({
  fillColor = "currentColor",
  className = "",
  inverted = false,
}: SvgWaveMaskProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${
        inverted ? "rotate-180" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-16 md:h-20 block"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#224233" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#84cc16" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#224233" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Dynamic layered animated wave curves */}
        <path
          d="M0,32 C320,100 480,10 720,45 C960,80 1200,20 1440,55 L1440,120 L0,120 Z"
          fill="url(#waveGrad)"
          className="opacity-40 animate-pulse"
        />
        <path
          d="M0,64 C240,10 480,90 720,35 C960,-10 1200,75 1440,40 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
