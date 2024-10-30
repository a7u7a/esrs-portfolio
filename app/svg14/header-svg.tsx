'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Leva } from 'leva'
import EmbossFilter from '@/components/filter'
import { useMouseAngle } from '@/lib/hooks'
import SVGText from '@/components/svg-text'
import { useScrollProgress } from '@/lib/hooks'
import SpinningLogo from '@/components/spinning-logo'
// WIP Text component with emboss effect

const TestPage = () => {
  const { container, scrollProgress } = useScrollProgress();
  const angle = useMouseAngle()
  return (
    <div ref={container} className='p-4 bg-[#D9D9D9] h-[200vh]'>
      <SpinningLogo scrollProgress={scrollProgress} />
      <EmbossFilter angle={angle} />
      <Leva hidden={true} />

      <div className='pt-12'>
        <SVGText semibold={false}>{"Esteban Serrano"}</SVGText>
        <SVGText className='pt-12'>{"Design Technologist"}</SVGText>
        <div className='pt-12'>
          <SVGText>{"I use design and code"}</SVGText>
          <SVGText>{"to develop digital products."}</SVGText>
        </div>
        <div className='pt-12'>
          <SVGText semibold={true}>{"Creating with brands,"}</SVGText>
          <SVGText semibold={true}>{"agencies, startups and"}</SVGText>
          <SVGText semibold={true}>{"research teams since 2014."}</SVGText>
        </div>
      </div>
    </div>
  )
}

export default TestPage
