'use client'
import React, { useEffect, useRef } from 'react'
import Controls from './controls'
import { useControls } from 'leva'
import HeaderCopy from '../../components/header-copy'



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
  const { baseFreq, numOct, baseFreq2, numOct2, scale, stdDev, azimuth, elevation, specConst1, specExp1, specConst2, specExp2, glow, shift, stdDev2 } = Controls()
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        viewBox={`0 0 500 500`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full bg-white"
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

            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0"
            />

            {/* <feGaussianBlur in="baseNoise" stdDeviation={stdDev} result="blur1" />
            <feSpecularLighting result="spec1" in="blur1" specularConstant={specConst1} specularExponent={specExp1} lightingColor="#ffffff">
              <feDistantLight azimuth={azimuth + 180} elevation={elevation} />
            </feSpecularLighting>

            <feColorMatrix
              in="spec1"
              type="matrix"
              values={`
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 ${glow} ${shift}`}
              result="highlight"
            /> */}

            {/* Shadow effect */}
            {/* <feGaussianBlur in="baseNoise" stdDeviation={stdDev} result="blur2" />
            <feSpecularLighting result="spec2" in="blur2" specularConstant={specConst2} specularExponent={specExp2} lightingColor="#ffffff">
              <feDistantLight azimuth={azimuth} elevation={elevation} />
            </feSpecularLighting> */}

            {/* Convert white to black for shadow */}
            {/* <feColorMatrix
              in="spec2"
              type="matrix"
              values={`
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 ${glow} ${shift}`}
              result="shadow"
            /> */}

            {/* <feComposite in="shadow" in2="highlight" operator={"lighter"} result="shadowed" /> */}

          </filter>
        </defs>

        <circle
          strokeWidth={3}
          fill="none"
          className={`stroke-red-500`}
          cx={"40%"}
          cy={"50%"}
          r={100}
        />

        <rect width="100%" height="100%" filter="url(#filter)" />

        <circle
          strokeWidth={3}
          fill="none"
          className={`stroke-green-500`}
          cx={"50%"}
          cy={"50%"}
          r={100}
        />

      </svg>
    </div>
  );
};