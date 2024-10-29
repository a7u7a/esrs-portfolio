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
      <HeaderCopy />
    </header>
  )
}

export default HeaderSvg

const AnimatedFilter = () => {
  const { baseFrequency, numOctaves, baseFrequency2, numOctaves2, scale, stdDev } = Controls()
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        viewBox={`0 0 500 500`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="filter">
            <feTurbulence type="fractalNoise" baseFrequency={baseFrequency} numOctaves={numOctaves} />

            <feComponentTransfer >
              <feFuncA type="discrete" tableValues="0 1 0" />
            </feComponentTransfer>

            <feColorMatrix
              result="spots"
              values="0 0 0 1 0
                      0 0 0 1 0
                      0 0 0 1 0
                      0 0 0 0 1"
            />


            {/* <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFrequency2}
              numOctaves={numOctaves2}
              result="turbulence" />
            <feDisplacementMap
              in2="turbulence"
              in="spots"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="G" />

            <feGaussianBlur stdDeviation={stdDev} /> */}

          </filter>

        </defs>
        <rect width="100%" height="100%" filter="url(#filter)" />
        {/* <circle cx="50%" cy="50%" r="100" fill="red" /> */}
      </svg>
    </div>
  );
};