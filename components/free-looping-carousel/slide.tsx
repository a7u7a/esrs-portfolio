import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import { FieldCTALinkTitleAndSubtitle, FieldCTALinkTitle, FieldTitleAndSubtitle, HintTitle, MoreExpandIcon, MoreRow } from '@/lib/utils'

interface SlideProps {
  children: React.ReactNode
  slide: IGalleryItem
  onClickSlide: (index: number) => void
  index: number
  collapsed: boolean
}

const Slide = ({ children, slide, onClickSlide, index, collapsed }: SlideProps) => {
  const [hover, setHovered] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const projects = [...selectedProjects, ...experimentalProjects]
  const project = projects.find(p => p.id === slide.id)

  if (!project) throw new Error("Project not found in slide")

  useEffect(() => {
    if (collapsed) {
      setShowMore(true)
      const timer = setTimeout(() => setToggle(false), 10)
      return () => clearTimeout(timer)
    } else {
      setToggle(true)
      const timer = setTimeout(() => setShowMore(false), 300)
      return () => clearTimeout(timer)
    }
  }, [collapsed])

  const handleClick = () => {
    onClickSlide(index)
  }

  return (
    // Embla Slide
    <div className="shrink-0 flex flex-col pl-3 text-[0.8rem] md:text-[0.9rem]">
      <div className={`relative ${slide.hideMore ? "cursor-auto" : "hover:cursor-pointer"}`} onClick={handleClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >

        <div className='relative'>
          {/* Gradient overlay */}
          <div className={`absolute rounded-b-lg inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-[80px] z-10 transition-opacity duration-200 ${hover ? 'opacity-50' : 'opacity-0'}`} />
          {children}
        </div>

        <div className={`z-20 absolute mx-1 my-1 bottom-0 inset-x-0 flex justify-between gap-2 transition-opacity duration-200 ${hover ? 'opacity-100' : 'opacity-0'}`}>
          <HintTitle slide={slide} project={project} />
          {!slide.hideMore && <MoreExpandIcon collapsed={toggle} />}
        </div>

        {!slide.hideMore &&
          <div className={`absolute inset-x-0 bottom-0 z-20 translate-y-full ${showMore ? 'block' : 'hidden'}`}>
            <MoreCard collapsed={toggle} project={project} />
          </div>
        }
      </div>
    </div>
  )
}

export default Slide

interface MoreProps {
  project: IProject
  collapsed: boolean
}

const MoreCard = ({ collapsed, project }: MoreProps) => {
  return (
    <div className='pt-3 p-2 cursor-default text-[#414141]'>
      <div className={`flex flex-col gap-1.5 `}>
        {project?.fields && project.fields.map((field, index) => (
          <MoreRow key={index} collapsed={collapsed} index={index} length={project.fields?.length || 0} date={index === 0 ? project.date : undefined}>
            <div >
              {field.url && field.value ? (
                <FieldCTALinkTitleAndSubtitle field={field} />
              ) : (null)}
              {field.url && !field.value ? (
                <FieldCTALinkTitle field={field} />
              ) : null}
              {!field.url && field.value ? (
                <FieldTitleAndSubtitle field={field} />
              ) : null}
            </div>
          </MoreRow>
        ))}
      </div>
    </div>
  )
}
