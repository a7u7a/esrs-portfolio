'use client'
import React, { useEffect, useRef } from 'react'
import Controls from './controls'

const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <AnimatedFilter />
    </header>
  )
}

export default HeaderSvg

const AnimatedFilter = () => {
  const { baseFreq, numOct, baseFreq2, numOct2, scale, stdDev, azimuth, elevation, specConst1, specExp1, specConst2, specExp2, glow, shift, stdDev2 } = Controls()
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        viewBox={`0 0 500 500`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="mainFilter" x="-50%" y="-50%" width="200%" height="200%">
            {/* Generate base noise */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFreq}
              numOctaves={numOct}
              result="noise1"
            />
            <feComponentTransfer in="noise1" result="spots">
              <feFuncA type="discrete" tableValues="0 1 0" />
            </feComponentTransfer>
            <feColorMatrix
              in="spots"
              result="matrix"
              values="0 0 0 1 0
                    0 0 0 1 0
                    0 0 0 1 0
                    0 0 0 1 1"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFreq2}
              numOctaves={numOct2}
              result="turb2"
            />
            <feDisplacementMap
              in="matrix"
              in2="noise2"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="baseNoise"
            />

            {/* Create a background for the text */}
            <feFlood floodColor="white" result="bg" />

            {/* Composite text over white background */}
            <feComposite in="SourceGraphic" in2="bg" operator="over" result="text" />

            {/* Blend the text with noise */}
            <feBlend
              in="baseNoise"
              in2="text"
              mode="multiply"
              result="blended"
            />

            {/* Apply final blur */}
            <feGaussianBlur in="blended" stdDeviation={stdDev} />
          </filter>
        </defs>



        {/* Background with noise and text */}
        <g filter="url(#mainFilter)">
          <rect width="100%" height="100%" fill="white" />
          <circle
            strokeWidth={3}
            fill="none"
            className={`stroke-red-500`}
            cx={"50%"}
            cy={"50%"}
            r={100}
          />
          <text
            x="50%"
            y="50%"
            fontSize={40}
            textAnchor="middle"
            fill="black"
            className='font-semibold'
          >
            Give me some text
          </text>
          
        </g>
        <circle
          strokeWidth={3}
          fill="none"
          className={`stroke-green-500`}
          cx="40%"
          cy="50%"
          r={100}
        />
      </svg>
    </div>
  );
};