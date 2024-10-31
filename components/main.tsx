'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Leva } from 'leva'
import { useMouseAngle, useRotationSpeed } from '@/lib/hooks'
import { useScrollProgress } from '@/lib/hooks'
import SpinningLogo from '@/components/spinning-logo'
import EmbossFilter from '@/components/emboss-svg-filter'
import FreeLoopingCarousel from '@/components/free-looping-carousel'
import collaborators from '@/content/collaborators'
import socials from "@/content/socials"
import { shuffledSlides } from '@/content/slides'
import { IGalleryItem } from '@/lib/types'
import FadeIn from '@/components/fade-in'

// const slides = [
//   { src: '/assets/placeholders/1.jpg', alt: 'image 1' },
//   { src: '/assets/placeholders/2.jpg', alt: 'image 2' },
//   { src: '/assets/placeholders/3.jpg', alt: 'image 3' },
//   { src: '/assets/placeholders/4.jpg', alt: 'image 4' },
//   { src: '/assets/placeholders/5.jpg', alt: 'image 5' },
//   { src: '/assets/placeholders/6.jpg', alt: 'image 6' },
// ]

const Main = () => {
  const [slides, setSlides] = useState<IGalleryItem[]>([]);
  const { container, scrollProgress } = useScrollProgress();
  const angle = useMouseAngle()
  const rotationSpeed = useRotationSpeed(scrollProgress)
  useEffect(() => {
    setSlides(shuffledSlides())
  }, [])
  return (
    <div ref={container} className='pt-32 md:pt-24 m-auto'>

      <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />
      <EmbossFilter angle={angle} />
      <Leva hidden={true} />


      <TextWrapper>
        <div className=''>
          <FadeIn threshold={0.3}>
            <p>{"Esteban Serrano is a design technologist based in Berlin."}</p>
          </FadeIn>
        </div>

        <div className='mt-16 md:mt-24'>
          <FadeIn threshold={0.3}>
            <p className=''>{"He collaborates with brands, studios and startups since 2014."}</p>
          </FadeIn>
        </div>
      </TextWrapper>

      <div className='mt-16 md:mt-24 mb-16'>
        <FreeLoopingCarousel slides={slides} />
      </div>

      <TextWrapper>

        <div>
          <FadeIn threshold={0.3}>
            <p>{"Mixing code and design to craft unique digital products."}</p>
          </FadeIn>
        </div>

        <div className='pt-24'>
          <FadeIn threshold={0.3}>
            <h1 className=''>{"People I've worked with:"}</h1>
          </FadeIn>
          <ul className='flex flex-col gap-3 pt-3'>
            {collaborators.map((collab, i) => (
              <FadeIn key={i} threshold={0.3}>
                <li >
                  {collab.url ? <a className='transition-colors ease-in-out duration-150 hover:text-[#9f9f9f]' href={collab.url} target="_blank" rel="noopener noreferrer">{collab.name}</a> : collab.name}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>

        <div className='pt-20'>

          <ul className='list-none flex flex-col gap-3 md:flex-row md:gap-6'>
            <FadeIn threshold={0.3}>
              <li>
                <a className='transition-colors ease-in-out duration-100 hover:text-[#8e8e8e]' href="mailto:esteban@esrs.co">
                  {"esteban@esrs.co"}
                </a>
              </li>
            </FadeIn>
            {socials.map((social, i) => (
              <FadeIn key={i} threshold={0.3}>
                <li>
                  <a className='transition-colors ease-in-out duration-100 hover:text-[#8e8e8e]' href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>


        <FadeIn threshold={0.3}>
          <footer className="pt-20 max-w-[600px] pb-40 text-[1.2rem] text-[#414141] leading-[1.4]">
            <p>{"© 2024"}</p>
            <p>{"All rights reserved."}</p>
            <p>{"This website shows a selected view of my work."}</p>
            <p>{"Licensed under CC BY-NC-SA 4.0."}</p>
            <p className="pt-2">{"Last update: "}{process.env.NEXT_PUBLIC_BUILD_DATE}</p>
          </footer>
        </FadeIn>

      </TextWrapper>

    </div>
  )
}

export default Main

function TextWrapper({ children }: { children: React.ReactNode }) {
  return <div className='px-4 flex flex-col max-w-[1000px]'>{children}</div>
}
