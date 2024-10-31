'use client'
import React, { useEffect, useRef, useState } from 'react'

interface SVGTextProps {
  semibold?: boolean
  children?: React.ReactNode
  className?: string
  color?: string
}

const SVGText = ({ semibold = false, children, className, color = "none" }: SVGTextProps) => {
  const textRef = useRef<SVGTextElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
        className=""
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.44" result="blur" />
          </filter>
        </defs> */}

        {/* <defs>
          <filter id="spotlightFilter">
            <feSpecularLighting result="spec1" in="blur1" specularConstant={1.81} specularExponent={9.24} lightingColor="#ffffff">
              <feSpotLight x="0" y="0" z="900" limitingConeAngle="9" />
            </feSpecularLighting>
          </filter>
        </defs> */}

        <text
          ref={textRef}
          x="0"
          y="0"
          fontSize="6rem"
          filter="url(#embossFilter)"
          className={`${semibold ? 'font-semibold' : ''}`}
          style={{
            dominantBaseline: "text-before-edge",
            whiteSpace: "pre-wrap"
          }}
        >
          {children}
        </text>
        {color !== "none" && <text
          x="0"
          y="0"

          fontSize="6rem"
          fill={color}
          // filter="url(#spotlightFilter)"
          className={`opacity-50 ${semibold ? 'font-semibold' : ''}`}
          style={{
            dominantBaseline: "text-before-edge",
            whiteSpace: "pre-wrap"
          }}
        >
          {children}
        </text>}
      </svg>
    </div>
  )
}

export default SVGText