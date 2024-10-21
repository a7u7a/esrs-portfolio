"use client"
import React, { useEffect, useMemo, useState } from 'react'

const progressFactor = 1200
const vbDims = { h: 110, w: 85 }
const maxSquareHeight = 65
const strokeWidth = 3.5
const startingAngle = 0.27
// const strokeColor = "black"
const strokeColor = "#686868"
const m = 2

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
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scrollY", scrollY);
  }, [scrollY])

  const lines = useMemo(() => {
    const [y1, y2] = getY(scrollY);
    return (
      <>
        <line
          x1={m}
          y1={y1}
          x2={m}
          y2={y2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <line
          x1={vbDims.w - m}
          y1={y1}
          x2={vbDims.w - m}
          y2={y2}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </>
    );
  }, [scrollY]);

  const ellipses = useMemo(() => {
    const [y1, y2] = getY(scrollY);
    const center = vbDims.w / 2
    const { rx, ry } = getEllipseParams(scrollY);
    return (
      <>
        <ellipse
          cx={center}
          cy={y1}
          rx={rx}
          ry={ry}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <ellipse
          cx={center}
          cy={y2}
          rx={rx}
          ry={ry}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </>
    )
  }, [scrollY])

  return (
    <div
      style={{ width: `${vbDims.w}px` }}
      className="fixed right-0 mt-4 mr-12 z-50"
    >
      <svg viewBox={`0 0 ${vbDims.w} ${vbDims.h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        {ellipses}
        {lines}
      </svg>
    </div>
  )
}

export default SpinningLogo