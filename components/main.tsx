'use client'
import React, { useEffect, useState } from 'react'
import { Leva } from 'leva'
import { useRotationSpeed } from '@/lib/hooks'
import { useScrollProgress } from '@/lib/hooks'
import SpinningLogo from '@/components/spinning-logo'
import FreeLoopingCarousel from '@/components/free-looping-carousel'
import collaborators from '@/content/collaborators'
import socials from "@/content/socials"
import { shuffledSlides } from '@/content/slides'
import { IGalleryItem } from '@/lib/types'
import FadeIn from '@/components/fade-in'
import { ICollaborator } from '@/lib/types'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'

const Main = () => {
  const [slides, setSlides] = useState<IGalleryItem[]>([]);
  const { container, scrollProgress } = useScrollProgress();
  const rotationSpeed = useRotationSpeed(scrollProgress)
  useEffect(() => {
    setSlides(shuffledSlides())
  }, [])
  return (
    <div ref={container} className='pt-40 md:pt-44 m-auto'>

      <FadeIn threshold={0.3}>
        <SpinningLogo rotationSpeed={rotationSpeed} scrollProgress={scrollProgress} />
      </FadeIn>
      <Leva hidden={true} />

      <TextWrapper>
        <div className=''>
          <FadeIn threshold={0.3}>
            <span>{"Esteban Serrano is a design technologist based in Berlin."}</span>
          </FadeIn>
        </div>

        <div className='mt-16 md:mt-24'>
          <FadeIn threshold={0.3}>
            <span className=''>{"He collaborates with brands, studios and startups since 2014."}</span>
          </FadeIn>
        </div>
      </TextWrapper>

      <FadeIn threshold={0.1}>
        <div className='flex flex-col my-16 md:mt-24 md:mb-18'  >
          <FreeLoopingCarousel slides={slides} />
          <ArrowRightHover />
        </div>
      </FadeIn>

      <TextWrapper>

        <FadeIn threshold={0.3}>
          <div>
            <span>{"Mixing code and design to craft unique digital products."}</span>
          </div>
        </FadeIn>


        <div className='mt-16 md:mt-24'>
          <FadeIn threshold={0.3}>
            <div>
              <span>{"Specialized in front-end development and interaction design."}</span>
            </div>
          </FadeIn>
        </div>

        <div className='mt-16 md:mt-24'>
          <FadeIn threshold={0.3}>
            <span className=''>{"People I've worked with:"}</span>
          </FadeIn>
          <ul className='list-none flex flex-col gap-3 pt-3 ml-3 md:ml-6 '>
            {collaborators.map((collab, i) => (
              <FadeIn key={i} threshold={0.3}>
                <Collaborator collab={collab} />
              </FadeIn>
            ))}
          </ul>
        </div>

        <div className='pt-20'>
          <ul className='list-none flex gap-3 md:gap-6'>
            {socials.map((social, i) => (
              <FadeIn key={i} threshold={0.3}>
                <li>
                  <a className='transition-colors ease-in-out duration-100 hover:text-[#8e8e8e]' href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                </li>
              </FadeIn>
            ))}
            <FadeIn threshold={0.3}>
              <li>
                <a className='transition-colors ease-in-out duration-100 hover:text-[#8e8e8e]' href="mailto:esteban@esrs.co">
                  {"esteban@esrs.co"}
                </a>
              </li>
            </FadeIn>
          </ul>
        </div>

        <FadeIn threshold={0.3}>
          <footer className="pt-20 max-w-[600px] pb-32 text-[1.2rem] text-[#414141] leading-[1.4]">
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

const Collaborator = ({ collab }: { collab: ICollaborator }) => {
  const [hover, setHovered] = useState(false);
  return (
    <li>
      <Link
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        className='transition-colors ease-in-out duration-150 hover:text-esrs-hover'
        rel="noopener noreferrer" target="_blank" href={collab.url}
      >
        <span>{collab.name}</span>
      </Link>
    </li>
  )
}


const ArrowRightHover = () => {
  const [hover, setHovered] = useState(false);
  return (
    <div className='flex justify-end mt-3 px-4 text-esrs-dark-gray text-[1.2rem]'>
      <Link href="/projects" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className='flex gap-1 items-center'>
          <span className='hover:text-esrs-hover'>{"See all"}</span>
          <ArrowRight color={hover ? "#848484" : "#686868"} size={16} weight='bold' />
        </div>
      </Link>
    </div>
  )
}