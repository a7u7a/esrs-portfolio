'use client'
import React from 'react'
import HeaderCopy from '../../components/header-copy'
import Controls from './controls'

// Testing emboss effect on text

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
  const { stdDev, azimuth, elevation, fontSize, specConst1, specExp1, specConst2, specExp2, operator1, operator2, glow, shift } = Controls()
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
          {/* Highlight effect */}
          <feGaussianBlur in="SourceGraphic" stdDeviation={stdDev} result="blur1" />
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
          />

          {/* Shadow effect */}
          <feGaussianBlur in="SourceGraphic" stdDeviation={stdDev} result="blur2" />
          <feSpecularLighting result="spec2" in="blur2" specularConstant={specConst2} specularExponent={specExp2} lightingColor="#ffffff">
            <feDistantLight azimuth={azimuth} elevation={elevation} />
          </feSpecularLighting>

          {/* Convert white to black for shadow */}
          <feColorMatrix
            in="spec2"
            type="matrix"
            values={`
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 ${glow} ${shift}`}
            result="shadow"
          />

          <feComposite in="shadow" in2="highlight" operator={operator1} result="shadowed" />
          <feComposite in="SourceGraphic" in2="shadowed" operator={operator2} />

        </filter>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="#E9E8D4" />

      <text x="50%" y="50%" fontSize={fontSize} textAnchor="middle" fill="#E9E8D4" filter="url(#filter)">
        {"Summer"}
      </text>

    </svg>
  )
}
