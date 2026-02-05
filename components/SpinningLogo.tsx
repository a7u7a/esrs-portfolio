"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { useMediaQuery } from '@/lib/hooks'
import Link from 'next/link'
interface Dims {
  h: number
  w: number
}
const vbDims = { h: 90, w: 63 }
const vbDimsMd = { h: 120, w: 90 }
const maxSquareHeight = 45
const maxSquareHeightMd = 65
const startingAngle = 0.27
const m = 4

function getAngle(value: number) {
  return ((2 * Math.PI * value)) + startingAngle
}

function getEllipseParams(value: number, dims: Dims) {
  const angle = getAngle(value);
  const rx = dims.w / 2 - m;
  const ry = (dims.w / 2) * Math.abs(Math.sin(angle));
  return { rx, ry };
}

function getY(value: number, maxSquareH: number, dims: Dims) {
  const angle = getAngle(value);
  const y1 = dims.h / 2 - (maxSquareH / 2) * Math.cos(angle);
  const y2 = dims.h / 2 + (maxSquareH / 2) * Math.cos(angle);
  return [y1, y2];
}

interface SpinningLogoProps {
  rotationSpeed: number
  scrollProgress: number
}

const SpinningLogo = ({ rotationSpeed, scrollProgress }: SpinningLogoProps) => {
  const [mounted, setMounted] = useState(false);
  const isMd = useMediaQuery('(min-width: 768px)')
  const dims = isMd ? vbDimsMd : vbDims
  const maxSquareH = isMd ? maxSquareHeightMd : maxSquareHeight

  const lines = useMemo(() => {
    const [y1, y2] = getY(scrollProgress, maxSquareH, dims);
    return (
      <>
        <line
          x1={m}
          y1={y1}
          x2={m}
          y2={y2}
        />
        <line
          x1={dims.w - m}
          y1={y1}
          x2={dims.w - m}
          y2={y2}
        />
      </>
    );
  }, [scrollProgress, maxSquareH, dims]);

  const ellipses = useMemo(() => {
    const [y1, y2] = getY(scrollProgress, maxSquareH, dims);
    const center = dims.w / 2
    const { rx, ry } = getEllipseParams(scrollProgress, dims);
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
  }, [scrollProgress, maxSquareH, dims])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      style={{ width: `${dims.w}px` }}
      className={`
        fixed 
        top-0 left-0 
        ml-3
        pt-1
        z-50
      `}
    >
      <Link href="/">
        <svg
          className='stroke-black hover:stroke-esrs-dark-gray stroke-[3px] md:stroke-[4px]'
          viewBox={`0 0 ${dims.w} ${dims.h}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
        >
          <defs>
            <filter id="blurFilter">
              <feGaussianBlur in="SourceGraphic" stdDeviation={`0 ${rotationSpeed}`} result="blur" />
            </filter>
          </defs>
          <g
            filter="url(#blurFilter)"
          >
            {ellipses}
            {lines}
          </g>
        </svg>
      </Link>
    </div>
  )
}

export default SpinningLogo