'use client'
import React from 'react'
import { useControls } from 'leva'
import HeaderCopy from './header-copy'
const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <HeaderSVGArt />
      {/* <HeaderCopy /> */}
    </header>
  )
}

export default HeaderSvg

const HeaderSVGArt = () => {
  const { radius, glow, shift, deviation } = useControls({
    radius: {
      value: 88.06,
      min: 0,
      max: 100,
      step: 0.001,
    },
    deviation: {
      value: 6.80,
      min: 0,
      max: 20,
      step: 0.001,
    },
    glow: {
      value: 18.83,
      min: 0,
      max: 30,
      step: 0.001,
    },
    shift: {
      value: -0.13,
      min: -2,
      max: 2,
      step: 0.001,
    },
  })
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
          <feGaussianBlur in="SourceGraphic" stdDeviation={deviation} result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            // values="
            //   1 0 0 0 0
            //   0 1 0 0 0
            //   0 0 1 0 0
            //   0 0 0 1 0"
            values={`
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 ${glow} ${shift}`}
            result="filter"
          />
        </filter>
      </defs>

      <g filter="url(#filter)">
        <circle
          className='stroke-white stroke-3'
          cx={"40%"}
          cy={"50%"}
          r={radius}
        />

        <circle
          className='stroke-white stroke-3'
          cx={"60%"}
          cy={"50%"}
          r={radius}
        />
      </g>

    </svg>
  )
}
