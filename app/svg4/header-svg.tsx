'use client'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Controls from './controls'

// Only way I've found to animate the feTurbulence SVG filter
// Adapted from https://codepen.io/GreenSock/pen/zYGwvRa
// Not compatible with Safari MacOS Desktop!

gsap.registerPlugin(useGSAP);

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

  useEffect(() => {
    if (filterRef.current) {
      gsap.to(filterRef.current, {
        duration: 1,
        attr: { 
          numOctaves: 0, 
          baseFrequency: 0 
        },
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
        snap: {
          numOctaves: 1
        }
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen overflow-hidden">
      <svg 
        viewBox={`0 0 ${width} ${height}`}
        className="w-auto h-auto max-w-[90%] max-h-[90%]"
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence
              ref={filterRef}
              type="turbulence"
              baseFrequency="0.09"
              numOctaves="8"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="50"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <image
          style={{
            filter: 'url(#displacementFilter)',
            transformOrigin: 'center',
            overflow: 'hidden'
          }}
          width={width}
          height={height}
          xlinkHref={imageUrl}
        />
      </svg>
    </div>
  );
};