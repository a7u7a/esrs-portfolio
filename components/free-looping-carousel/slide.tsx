import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import { ArrowElbowRightUp, CaretDown, CaretUp } from '@phosphor-icons/react';
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
  const [hideText, setHideText] = useState(false);
  const [ref, bounds] = useMeasure()

  if (!project) throw new Error("Project not found in slide")

  useEffect(() => {
    setHideText(bounds.width < 200)
  }, [bounds])

  return (
    <LinkWrapper projectId={project.id} isLink={!slide.hideMore || false}>
      {/* // Embla Slide */}
      <div ref={ref} className="shrink-0 flex flex-col pl-4 text-[0.8rem] md:text-[0.9rem] text-esrs-dark-gray">

        <div className={`relative`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >

          {/* Overlay */}

          <div className={`absolute rounded-lg inset-0 bg-black z-10 pointer-events-none transition-opacity duration-200 ${hover ? 'opacity-20' : 'opacity-0'}`} />

          {children}
          <div className={`text-esrs-gray z-20 absolute mx-1 my-1 bottom-0 inset-x-0 transition-opacity duration-200 ${hover ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
            <div className='flex justify-between gap-1'>
              <HintTitle slide={slide} project={project} hover={isMd ? hover : true} />
              {!slide.hideMore &&
                <LinkToProject hover={isMd ? hover : true} hideText={hideText} />
              }
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


function HintTitle({ slide, project, hover }: { slide: IGalleryItem, project?: IProject, hover: boolean }) {
  return (
    <span className={`bg-black bg-opacity-50 px-1.5 py-0.5 rounded flex transition-opacity duration-200 mix-blend-difference ${hover ? 'opacity-100' : 'opacity-0'}`}>
      <span>
        {slide.projectTypeOverride || project?.type}
      </span>
    </span>
  )
}

const LinkToProject = ({ hover, hideText }: { hover: boolean, hideText: boolean }) => {
  return (
    <div className={`flex gap-1 bg-black bg-opacity-50 px-1.5 py-0.5 rounded cursor-pointer mix-blend-difference transition-opacity duration-200 ${hover ? 'opacity-100' : 'opacity-0'}`}>
      {/* {!hideText && <span>{"to project"}</span>} */}
      <ArrowElbowRightUp color="#EFEFEF" size={16} weight='bold' />
    </div>
  )
}

