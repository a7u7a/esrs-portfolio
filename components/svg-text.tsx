'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Leva } from 'leva'
import EmbossFilter from '@/components/filter'
import { useMouseAngle } from '@/lib/hooks'

interface SVGTextProps {
  semibold?: boolean
  children?: React.ReactNode
  className?: string
}

const SVGText = ({ semibold = false, children, className }: SVGTextProps) => {
  const textRef = useRef<SVGTextElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    console.log('dimensions', dimensions)
  }, [dimensions])

  useEffect(() => {
    if (textRef.current) {
      const bbox = textRef.current.getBBox();
      setDimensions({
        width: bbox.width,
        height: bbox.height
      });
    }
  }, [children, semibold]);

  return (
    <div className={className}>
      <svg
        style={{
          height: `${dimensions.height}px`,
          width: `${dimensions.width}px`
        }}
        className="bg-[#D9D9D9]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          ref={textRef}
          x="0"
          y="0"
          fontSize="5.2rem"
          filter="url(#embossFilter)"
          className={`${semibold ? 'font-semibold' : ''}`}
          style={{
            dominantBaseline: "text-before-edge",
            whiteSpace: "pre-wrap"
          }}
        >
          {children}
        </text>
      </svg>
    </div>
  )
}

export default SVGText