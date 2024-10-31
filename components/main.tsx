'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Leva } from 'leva'
import { useMouseAngle, useRotationSpeed } from '@/lib/hooks'
import SVGText from '@/components/svg-text'
import { useScrollProgress } from '@/lib/hooks'
import SpinningLogo from '@/components/spinning-logo'
import EmbossFilter from '@/components/emboss-svg-filter'
import FreeLoopingCarousel from '@/components/free-looping-carousel'
import collaborators from '@/content/collaborators'

const slides = [
  { src: '/assets/placeholders/1.jpg', alt: 'image 1' },
  { src: '/assets/placeholders/2.jpg', alt: 'image 2' },
  { src: '/assets/placeholders/3.jpg', alt: 'image 3' },
  { src: '/assets/placeholders/4.jpg', alt: 'image 4' },
  { src: '/assets/placeholders/5.jpg', alt: 'image 5' },
  { src: '/assets/placeholders/6.jpg', alt: 'image 6' },
]

const Main = () => {
  const { container, scrollProgress } = useScrollProgress();
  const angle = useMouseAngle()
  const rotationSpeed = useRotationSpeed(scrollProgress)

  return (
    <div ref={container} className='bg-[#D7D7D7]'>
      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />
      <EmbossFilter angle={angle} />
      <Leva hidden={true} />
      <div className='pt-10'>

        <SVGTextWrapper>
          <div>
            <SVGText>{"Esteban Serrano is a"}</SVGText>
            <SVGText>{"design technologist"}</SVGText>
            <SVGText>{"based in Berlin."}</SVGText>
          </div>

          <div className='pt-24'>
            <SVGText>{"He collaborates with"}</SVGText>
            <SVGText>{"brands, studios and startups"}</SVGText>
            <SVGText>{"since 2014."}</SVGText>
          </div>
        </SVGTextWrapper>

        <SVGTextWrapper>
          <div className='pt-24'>
            <SVGText>{"Mixing code and design"}</SVGText>
            <SVGText>{"to craft unique digital products."}</SVGText>
          </div>
        </SVGTextWrapper>

        <div className='mt-20 mb-16'>
          <FreeLoopingCarousel slides={slides} />
        </div>

        <SVGTextWrapper>
          <div className=''>
            <SVGText>{"People I've worked with:"}</SVGText>
            <div className='pt-8'>
              {collaborators.map((collaborator, index) => (
                <SVGText key={index}>{collaborator.name}</SVGText>
              ))}
            </div>
          </div>
        </SVGTextWrapper>

        <SVGTextWrapper>
          <div className='pt-20'>
            <div>
              <SVGText>{"esteban@esrs.co"}</SVGText>
            </div>
            <div className='pt-20 flex flex-row gap-20'>
              <SVGText>{"GitHub"}</SVGText>
              <SVGText>{"LinkedIn"}</SVGText>
            </div>
          </div>

          <footer className="pt-20 max-w-[600px] pb-40 ">
            <p>{"© 2024"}</p>
            <p>{"All rights reserved."}</p>
            <p>{"This website shows a selected view of my work."}</p>
            <p>{"Licensed under CC BY-NC-SA 4.0."}</p>
            <p className="pt-2">{"Last update: "}{process.env.NEXT_PUBLIC_BUILD_DATE}</p>
          </footer>

        </SVGTextWrapper>

      </div>
    </div>
  )
}

export default Main

function SVGTextWrapper({ children }: { children: React.ReactNode }) {
  return <div className='px-4 flex flex-col'>{children}</div>
}
