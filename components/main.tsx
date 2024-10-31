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
import socials from "@/content/socials"

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
    <div ref={container} className=''>
      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />
      <EmbossFilter angle={angle} />
      <Leva hidden={true} />
      <div className='pt-24'>

        <TextWrapper>
          <div className=''>
            <p>Esteban Serrano is a design technologist based in Berlin.</p>
          </div>

          <div className='pt-24'>
            <p className=''>{"He collaborates with brands, studios and startups since 2014."}</p>
          </div>
        </TextWrapper>

        <div className='mt-24 mb-16'>
          <FreeLoopingCarousel slides={slides} />
        </div>

        <TextWrapper>

          <div>
            <p>{"Mixing code and design to craft unique digital products."}</p>
          </div>

          <div className='pt-24'>
            <h1>{"People I've worked with:"}</h1>
            <ul className='flex flex-col gap-3 pt-3'>
              {collaborators.map((collab, i) => (
                <li key={i}>
                  {collab.url ? <a className='transition-colors ease-in-out duration-150 hover:text-[#9f9f9f]' href={collab.url} target="_blank" rel="noopener noreferrer">{collab.name}</a> : collab.name}
                </li>
              ))}
            </ul>
          </div>

          <div className='pt-20'>
            
            <ul className='list-none flex flex-wrap gap-20'>
              <li>
                <a className='transition-colors ease-in-out duration-100 hover:text-[#8e8e8e]' href="mailto:esteban@esrs.co">
                  {"esteban@esrs.co"}
                </a>
              </li>
              {socials.map((social, i) => (
                <li key={i} >
                  <a className='transition-colors ease-in-out duration-100 hover:text-[#8e8e8e]' href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <footer className="pt-20 max-w-[600px] pb-40 text-[1.2rem] text-[#414141] leading-[1.4]">
            <p>{"© 2024"}</p>
            <p>{"All rights reserved."}</p>
            <p>{"This website shows a selected view of my work."}</p>
            <p>{"Licensed under CC BY-NC-SA 4.0."}</p>
            <p className="pt-2">{"Last update: "}{process.env.NEXT_PUBLIC_BUILD_DATE}</p>
          </footer>

        </TextWrapper>

      </div>
    </div>
  )
}

export default Main

function TextWrapper({ children }: { children: React.ReactNode }) {
  return <div className='px-4 flex flex-col max-w-[1000px]'>{children}</div>
}
