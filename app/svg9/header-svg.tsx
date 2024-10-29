'use client'
import React, { useEffect, useRef, useState } from 'react'
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
      {/* <HeaderCopy /> */}
    </header>
  )
}

export default HeaderSvg

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AnimatedFilter = () => {
  const [mounted, setMounted] = useState(false)
  const { baseFreq, numOct, baseFreq2, numOct2, scale } = Controls()
  const [seed, setSeed] = useState<number | null>(null)

  useEffect(() => {
    setSeed(getRandomInt(1, 100000))
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        viewBox={`0 0 500 500`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="filter">

            <feTurbulence seed={seed!} type="fractalNoise" baseFrequency={baseFreq} numOctaves={numOct} result="noise1" />

            <feComponentTransfer in="noise1" result="spots">
              <feFuncA type="discrete" tableValues="0 1 0" />
            </feComponentTransfer>

            <feColorMatrix
              in="spots"
              result="matrix"
              values="0 0 0 1 0
                      0 0 0 1 0
                      0 0 0 1 0
                      0 0 0 1 0"
            />

            <feTurbulence
              seed={seed!}
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

          </filter>
        </defs>

        <image href="https://picsum.photos/1920/1080" width="100%" height="100%" />

        <circle
          strokeWidth={3}
          fill="none"
          className={`stroke-green-500`}
          cx={"40%"}
          cy={"50%"}
          r={100}
        />

        <g filter="url(#filter)">
          <rect width="100%" height="100%" />
          <text x="50%" y="50%" fontSize={40} textAnchor="middle" fill="white">
            {"Give me some text"}
          </text>
        </g>

      </svg>
    </div>
  );
};