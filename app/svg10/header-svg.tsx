'use client'
import React, { useEffect, useRef } from 'react'
import Controls from './controls'
import { useControls } from 'leva'
import HeaderCopy from '../../components/header-copy'

// Only way I've found to animate the feTurbulence SVG filter
// Adapted from https://codepen.io/GreenSock/pen/zYGwvRa
// Not compatible with Safari MacOS Desktop!

const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <AnimatedFilter />
      {/* <HeaderCopy /> */}
    </header>
  )
}

export default HeaderSvg

const AnimatedFilter = () => {
  const { baseFreq, numOct, baseFreq2, numOct2, scale, stdDev, azimuth, elevation, specConst1, specExp1, specConst2, specExp2, glow, shift, stdDev2, k1, k2, k3, k4 } = Controls()
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        viewBox={`0 0 500 500`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="filter">

            <feTurbulence type="fractalNoise" baseFrequency={baseFreq} numOctaves={numOct} result="noise1" />

            <feComponentTransfer in="noise1" result="spots">
              <feFuncA type="discrete" tableValues="0 1 0" />
            </feComponentTransfer>

            <feColorMatrix
              in="spots"
              result="matrix"
              values="0 0 0 1 0
                      0 0 0 1 0
                      0 0 0 1 0
                      0 0 0 1 0"
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
        
          </filter>
        </defs>

        <circle
          strokeWidth={3}
          fill="none"
          className={`stroke-green-500`}
          cx={"40%"}
          cy={"50%"}
          r={100}
        />

        <g filter="url(#filter)">
          <rect width="100%" height="100%" />
          <text x="50%" y="50%" fontSize={40} textAnchor="middle" fill="white">
            {"Give me some text"}
          </text>
        </g>

      

        {/* <rect width="100%" height="100%" filter="url(#filter)" />

        <text x="50%" y="50%" fontSize={40} textAnchor="middle" fill="black" >
          {"Give me some text"}
        </text> */}

      </svg>
    </div>
  );
};