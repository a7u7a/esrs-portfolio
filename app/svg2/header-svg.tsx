'use client'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Controls from './controls'

// Trying this but cuouldnt get it to animate with framer motion, GSAP or requestanimationframe: https://css-tricks.com/creating-patterns-with-svg-filters/#patterns-gallery

gsap.registerPlugin(useGSAP);

const HeaderSvg = () => {
  return (
    <header className='h-[600px] overflow-hidden relative w-full bg-esrs-black text-esrs-gray'>
      <HeaderSVGArt />
    </header>
  )
}

export default HeaderSvg

const HeaderSVGArt = () => {
  const svgRef = useRef(null);
  const { bfY, bfX } = Controls()
  const turbulenceRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(turbulenceRef.current, {
      duration: 5,
      attr: { baseFrequency: "0.03 0.03" },
      ease: "power1.inOut",
      onUpdate: () => {
        // Force repaint
        // @ts-ignore
        svgRef.current.style.filter = 'url(#coolEffect)';
      }
    });

  }, { scope: turbulenceRef });

  useEffect(() => {
    // Force initial render
    // @ts-ignore
    svgRef.current.style.filter = 'url(#coolEffect)';
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="coolEffect">
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            numOctaves="2"
            seed="0"
          />
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#coolEffect)" />
    </svg>
  )
}
