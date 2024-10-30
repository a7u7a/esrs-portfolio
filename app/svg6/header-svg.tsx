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

      <div className='absolute inset-0 w-full h-full'>
        <div>{"Henlo"}</div>
      </div>
    </header>
  )
}

export default HeaderSvg

const HeaderSVGArt = () => {
  const { blur, azimuth, elevation, fontSize, specConstH, specExpH, specConstS, specExpS, glow, shift, text } = Controls()
  return (
    <svg
      viewBox="0 0 500 500"
      // preserveAspectRatio="xMidYMid slice"
      // className="absolute inset-0 w-full h-full"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[#D9D9D9]"
      // fill="#D9D9D9"
      xmlns="http://www.w3.org/2000/svg"
    >

      <defs>
        <filter id="filter">
          {/* Highlight effect */}
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur1" />
          <feSpecularLighting result="spec1" in="blur1" specularConstant={specConstH} specularExponent={specExpH} lightingColor="#ffffff">
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
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur2" />
          <feSpecularLighting result="spec2" in="blur2" specularConstant={specConstS} specularExponent={specExpS} lightingColor="#ffffff">
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

          <feComposite in="shadow" in2="highlight" operator={"lighter"} result="shadowed" />

        </filter>
      </defs>

      <g filter="url(#filter)">

        <text x="50%" y="43%" fontSize={fontSize} textAnchor="middle" fill="black" className='font-semibold'>
          {text}
        </text>

        <text x="50%" y="67%" fontSize={fontSize} textAnchor="middle" fill="black">
          {text}
        </text>
      </g>

      <text x="50%" y="80%" fontSize={15} textAnchor="middle" fill="#474747" >
        {text}
      </text>

    </svg>
  )
}
