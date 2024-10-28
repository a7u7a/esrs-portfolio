'use client'
import React from 'react'
import HeaderCopy from '../../components/header-copy'
import Controls from './controls'

// Testing feGaussianBlur, feColorMatrix, and feComposite adapted from https://codepen.io/supah/pen/KKGqjmL

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
  const { deviation, glow, shift, radius, stroke } = Controls()
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
          <feGaussianBlur edgeMode="duplicate" in="SourceGraphic" stdDeviation={deviation} result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
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
          strokeWidth={stroke}
          className={`stroke-green-500`}
          cx={"40%"}
          cy={"50%"}
          r={radius}
        />

        <circle
          strokeWidth={stroke}
          className={`stroke-red-500`}
          cx={"60%"}
          cy={"50%"}
          r={radius}
        />
      </g>

    </svg>
  )
}
