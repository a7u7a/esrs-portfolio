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
  const { fontSize, baseFreq, baseFreq2, scale, blur, azimuth, elevation, specConstH, specExpH, specConstS, specExpS, glow, shift, text } = Controls()
  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        // viewBox={`0 0 500 500`}
        // preserveAspectRatio="xMidYMid slice"
        // className="absolute inset-0 w-full h-full bg-[#D9D9D9]"
        viewBox="0 0 500 500"
        // preserveAspectRatio="xMidYMid slice"
        // className="absolute inset-0 w-full h-full"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[#D9D9D9]"
        // fill="#D9D9D9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="filter">
            {/* Base b&w noise */}
            <feTurbulence type="fractalNoise" baseFrequency={baseFreq} numOctaves={2} result="noise1" />

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
              numOctaves={2}
              result="turb2"
            />

            <feDisplacementMap
              in="matrix"
              in2="turb2"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="noise2"
            />

            <feColorMatrix
              in="noise2"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0"
              result="baseNoise"
            />

            {/* Blend text over noise */}
            {/* Create a background for the text */}
            <feFlood floodColor="white" result="bg" />

            {/* Composite text over white background */}
            <feComposite in="SourceGraphic" in2="bg" operator="over" result="text" />

            {/* Blend the text with noise */}
            {/* <feBlend
              in="baseNoise"
              in2="text"
              mode="add"
              result="blended"
            /> */}

            <feComposite in="baseNoise" in2="text" operator="over" result="blended" />

            {/* Issue is in this step! */}
            <feColorMatrix
              in="blended"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 1 0"
              result="textAndNoise"
            />

            {/* Emboss effect */}
            {/* Highlight */}
            <feGaussianBlur in="textAndNoise" stdDeviation={blur} result="blur1" />
            {/* <feSpecularLighting result="spec1" in="blur1" specularConstant={specConstH} specularExponent={specExpH} lightingColor="#ffffff">
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

            {/* Shadow */}
            {/* <feGaussianBlur in="baseNoise" stdDeviation={blur} result="blur2" />
            <feSpecularLighting result="spec2" in="blur2" specularConstant={specConstS} specularExponent={specExpS} lightingColor="#ffffff">
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
            />

            <feComposite in="shadow" in2="highlight" operator={"lighter"} result="shadowed" /> */}

          </filter>
        </defs>

        <g filter="url(#filter)">
          <rect width="100%" height="100%" fill="white" />
          <text
            x="50%"
            y="50%"
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