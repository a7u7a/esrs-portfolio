import React from 'react'
import Controls from './controls'

const SVGFilter = () => {
  const { baseFreq, baseFreq2, scale, blur, azimuth, elevation, specConstH, specExpH, specConstS, specExpS, glow, shift } = Controls()
  return (
    // <svg style={{ position: 'absolute', width: 0, height: 0 }}> // Export the filter inside this svg if you need to mount it somewhere else in your app      
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
        {/* Composite text over white background */}
        <feComposite in="SourceGraphic" operator={"lighter"} result="text" />

        {/* Blend the text with noise */}
        <feBlend
          in="baseNoise"
          in2="text"
          mode="add"
          result="blended"
        />

        {/* Convert white bg to transparent*/}
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

        {/* Shadow */}
        <feGaussianBlur in="textAndNoise" stdDeviation={blur} result="blur2" />
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

        {/* Combine shadows and highlights */}
        <feComposite in="shadow" in2="highlight" operator={"lighter"} result="shadowed" />

      </filter>
    </defs>
    // </svg>
  )
}

export default SVGFilter