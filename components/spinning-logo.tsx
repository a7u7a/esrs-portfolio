"use client"
import React, { useMemo } from 'react'

const vbDims = { h: 88, w: 65 }
const maxSquareHeight = 50
const startingAngle = 0.27
const m = 2

function getAngle(value: number) {
  return ((2 * Math.PI * value)) + startingAngle
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

interface SpinningLogoProps {
  scrollProgress: number
}

const SpinningLogo = ({ scrollProgress }: SpinningLogoProps) => {

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

  return (
    <div
      style={{ width: `${vbDims.w}px` }}
      className={`
        fixed 
        ml-2 mb-2
        top-0 right-0 
        mt-10 md:mt-4
        mr-3 md:mr-8 2xl:mr-12
        z-50 hover:cursor-pointer
      `}
    >
      <svg
        className='stroke-esrs-dark-gray stroke-[3px] hover:stroke-esrs-blue transition-colors duration-200'
        style={{ willChange: "transform" }}
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