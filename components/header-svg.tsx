'use client'
import React from 'react'
import { useControls } from 'leva'

const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <HeaderSVGArt />
    </header>
  )
}

export default HeaderSvg

const HeaderSVGArt = () => {
  const { radius, glow, shift } = useControls({
    radius: {
      value: 10,
      min: 0,
      max: 100,
      step: 0.001,
    },
    glow: {
      value: 30,
      min: 0,
      max: 30,
      step: 0.001,
    },
    shift: {
      value: -1,
      min: -2,
      max: 2,
      step: 0.001,
    }
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
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${glow} ${shift}`} result="filter" />
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
