'use client'
import React, { useEffect, useRef } from 'react'
import Controls from './controls'
import { useControls } from 'leva'

// Only way I've found to animate the feTurbulence SVG filter
// Adapted from https://codepen.io/GreenSock/pen/zYGwvRa
// Not compatible with Safari MacOS Desktop!

const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <AnimatedFilter
        imageUrl="https://i.postimg.cc/43DKn46z/colours.jpg"
      />
    </header>
  )
}

export default HeaderSvg

interface AnimatedFilterProps {
  imageUrl: string;
  width?: number;
  height?: number;
}

const AnimatedFilter = ({
  imageUrl,
  width = 801,
  height = 537
}: AnimatedFilterProps) => {
  const filterRef = useRef(null);

  const { baseFrequency, numOctaves, stdDev } = useControls('Turbulence Effect', {
    baseFrequency: {
      value: 0.006,
      min: 0,
      max: 0.01,
      step: 0.00001
    },
    numOctaves: {
      value: 2,
      min: 0,
      max: 5,
      step: 1
    },
    stdDev: {
      value: 0,
      min: 0,
      max: 20,
      step: 0.001
    }
  });

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-auto h-auto max-w-[90%] max-h-[90%]"
      >
        <defs>

          <filter id="filter">
            <feTurbulence type="fractalNoise" baseFrequency={baseFrequency} numOctaves={numOctaves} />

            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 1 0" />
            </feComponentTransfer>

            <feColorMatrix values="0 0 0 1 0
                               0 0 0 1 0
                               0 0 0 1 0
                               0 0 0 0 1"/>

            <feGaussianBlur stdDeviation={stdDev} />
            
          </filter>

        </defs>
        <rect width="100%" height="100%" filter="url(#filter)" />
      </svg>
    </div>
  );
};