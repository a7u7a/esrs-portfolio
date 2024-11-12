import React, { useEffect, useState } from 'react'
import { IGalleryItem } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import { ArrowRight } from '@phosphor-icons/react';
import { useMediaQuery } from '@/lib/hooks';
import useMeasure from 'react-use-measure';
import Link from 'next/link';
interface SlideProps {
  children: React.ReactNode
  slide: IGalleryItem
}

const Slide = ({ children, slide }: SlideProps) => {
  const isMd = useMediaQuery('(min-width: 768px)')
  const [hover, setHovered] = useState(false);
  const projects = [...selectedProjects, ...experimentalProjects]
  const project = projects.find(p => p.id === slide.id)
  const [ref, bounds] = useMeasure()

  if (!project) throw new Error("Project not found in slide")

  return (
    <LinkWrapper projectId={project.id} isLink={true}>
      {/* // Embla Slide */}
      <div ref={ref} className="shrink-0 flex flex-col pl-4 text-[0.8rem] md:text-[0.9rem] text-esrs-dark-gray">

        <div className={`relative`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

          {/* Overlay */}
          <div className={`absolute rounded-lg inset-0 bg-black z-10 pointer-events-none transition-opacity duration-200 ${hover ? 'opacity-20' : 'opacity-0'}`} />

          {children}
          <div className={`text-esrs-gray p-1 z-20 absolute bottom-0 inset-x-0 w-full justify-center transition-opacity duration-200 ${hover ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex flex-wrap gap-1'>
              <HintTitle text={project.type} />
              <HintTitle arrow={true} />
            </div>
          </div>
        </div>
      </div>
    </LinkWrapper>
  )
}

export default Slide

function LinkWrapper({ children, projectId, isLink }: { children: React.ReactNode, projectId: string, isLink: boolean }) {
  if (!isLink) return <>{children}</>
  return (
    <Link href={`/work?p=${projectId}`}>
      {children}
    </Link>
  )
}

function HintTitle({ text, arrow = false }: { text?: string, arrow?: boolean }) {
  return (
    <div className={`bg-black bg-opacity-50 px-1.5 py-0.5 rounded flex items-center gap-1 mix-blend-difference`}>
      {text && <span className='text-white'>
        {text}
      </span>}
      {arrow && <ArrowRight color={"white"} size={16} weight='bold' />}
    </div>
  )
}