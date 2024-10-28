'use client'
import React from 'react'
import Controls from './controls'


// Light effect on text


const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <HeaderSVGArt />
    </header>
  )
}

export default HeaderSvg

const HeaderSVGArt = () => {
  const { deviation, azimuth, elevation, fontSize, specConst, specExp, radius, glow, shift } = Controls()
  return (
    <svg
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>
        <filter id="filter">
          <feGaussianBlur stdDeviation={deviation} result="blur" />
          <feSpecularLighting result="spec" in="blur" specularConstant={specConst} specularExponent={specExp} lightingColor="#ffffff">
            <feDistantLight azimuth={azimuth} elevation={elevation} />
          </feSpecularLighting>

          <feColorMatrix
            in="spec"
            type="matrix"
            values={`
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 ${glow} ${shift}`}
            result="shadow"
          />

          {/* <feComposite in="SourceGraphic" in2="spec" operator={operator} k1="0" k2="1" k3="1" k4="0" /> */}
        </filter>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="#E9E8D4" />

      <g>
        <circle
          strokeWidth={3}
          className={`stroke-green-500`}
          cx={"40%"}
          cy={"50%"}
          r={radius}
        />

        <circle
          strokeWidth={3}
          className={`stroke-red-500`}
          cx={"60%"}
          cy={"50%"}
          r={radius}
        />
      </g>

      <text x="50%" y="50%" textAnchor="middle" fill="white" filter="url(#filter)">
        <tspan fontSize={`${fontSize}px`} fontWeight="bold">
          Hello
        </tspan>
      </text>

    </svg>
  )
}
