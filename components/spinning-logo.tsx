"use client"
import React, { useEffect, useMemo, useState } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const progressFactor = 4
const vbDims = { h: 100, w: 65 }
const maxSquareHeight = 50
const startingAngle = 0.27
const m = 2
const turns = 6

function getAngle(value: number) {
  return ((2 * Math.PI * value) / progressFactor) + startingAngle
}

function getEllipseParams(value: number) {
  const angle = getAngle(value);
  const rx = vbDims.w / 2 - m;
  const ry = (vbDims.w / 2) * Math.abs(Math.sin(angle));
  return { rx, ry };
}

function getY(value: number) {
  const angle = getAngle(value);
  const y1 = vbDims.h / 2 - (maxSquareHeight / 2) * Math.cos(angle);
  const y2 = vbDims.h / 2 + (maxSquareHeight / 2) * Math.cos(angle);
  return [y1, y2];
}

const SpinningLogo = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    const setupScrollTrigger = () => {
      const container = document.body;
      if (!container) return;
      const proxy = { progress: 0 };
      gsap.to(proxy, {
        ease: "none",
        progress: 1,
        onUpdate: () => setScrollProgress(proxy.progress * turns),
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.9,
        }
      });
    };
    // Wait for the body to be ready
    setTimeout(setupScrollTrigger, 100);
  }, { scope: document.body })

  const lines = useMemo(() => {
    const [y1, y2] = getY(scrollProgress);
    return (
      <>
        <line
          x1={m}
          y1={y1}
          x2={m}
          y2={y2}
        />
        <line
          x1={vbDims.w - m}
          y1={y1}
          x2={vbDims.w - m}
          y2={y2}
        />
      </>
    );
  }, [scrollProgress]);

  const ellipses = useMemo(() => {
    const [y1, y2] = getY(scrollProgress);
    const center = vbDims.w / 2
    const { rx, ry } = getEllipseParams(scrollProgress);
    return (
      <>
        <ellipse
          cx={center}
          cy={y1}
          rx={rx}
          ry={ry}
        />
        <ellipse
          cx={center}
          cy={y2}
          rx={rx}
          ry={ry}
        />
      </>
    )
  }, [scrollProgress])

  if (!isMounted) return null;

  return (
    <div
      className="fixed right-0 mt-4 mr-12 z-50 hover:cursor-pointer"
      style={{ width: `${vbDims.w}px` }}
    >
      <svg
        className='stroke-esrs-dark-gray stroke-[3px] hover:stroke-esrs-blue transition-colors duration-200 stroke-'
        viewBox={`0 0 ${vbDims.w} ${vbDims.h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
      >
        {ellipses}
        {lines}
      </svg>
    </div>
  )
}

export default SpinningLogo