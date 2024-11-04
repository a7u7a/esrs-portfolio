'use client'
import React, { useEffect, useRef } from 'react'
import Controls from './controls'
import SVGFilter from './filter'

// Here I was able to merge text from the svg with generative noise and apply an effect over the combined output. In this case, an emboss effect.

const Main = () => {
  return (
    <AnimatedFilter />
  )
}

export default Main

const AnimatedFilter = () => {
  const { fontSize, text, bgBlur, radius, strokeWidth } = Controls()
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden bg-black">
      <svg
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
        className="bg-[#D9D9D9]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SVGFilter />

        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation={bgBlur} />
          </filter>
        </defs>

        <g
          filter="url(#blur)"
        >
          <rect width="100%" height="100%" fill="#1D190A" />

          <circle cx="0%" cy="0%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="33%" cy="0%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="66%" cy="0%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="100%" cy="0%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />

          <circle cx="0%" cy="33%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="33%" cy="33%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="66%" cy="33%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="100%" cy="33%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />

          <circle cx="0%" cy="66%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="33%" cy="66%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="66%" cy="66%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="100%" cy="66%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />

          <circle cx="0%" cy="100%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="33%" cy="100%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="66%" cy="100%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />
          <circle cx="100%" cy="100%" r={radius} stroke="#447199" strokeWidth={strokeWidth} fill="#9DB3C7" />

        </g>

        <g filter="url(#filter)">
          <rect width="100%" height="100%" fill="white" />
          <text
            x="50%"
            y="55%"
            fontSize={fontSize}
            textAnchor="middle"
            fill="black"
            className='font-semibold'
          >
            {text}
          </text>
        </g>

      </svg>
    </div>
  );
};