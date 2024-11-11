import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import { ArrowElbowRightUp, CaretDown, CaretUp } from '@phosphor-icons/react';
import Link from 'next/link';
import { useMediaQuery } from '@/lib/hooks';
import useMeasure from 'react-use-measure';

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
    // Embla Slide
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
  )
}

export default Slide

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



interface MoreOldProps {
  project: IProject
  collapsed: boolean
}

const MoreCardOld = ({ collapsed, project }: MoreOldProps) => {
  return (
    <div className={`flex flex-col gap-1.5 pt-3 p-2 cursor-default`}>
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
  )
}

const FieldCTALinkTitleAndSubtitle = ({ field }: MoreLinkProps) => {
  const [hover, setHovered] = useState(false);
  return (
    <div className='flex gap-1'>
      <span className='font-bold'>{field.title}</span>
      <Link
        className='hover:text-esrs-hover flex'
        rel="noopener noreferrer"
        target="_blank"
        href={field.url || ''}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{field.value}</span>
        <ArrowElbowRightUp color={hover ? '#686868' : '#dddddd'} size={16} weight='bold' />
      </Link>
    </div>
  )
}

interface MoreLinkProps {
  field: IProjectField
}

const FieldCTALinkTitle = ({ field }: MoreLinkProps) => {
  const [hover, setHovered] = useState(false);
  return (
    <Link rel="noopener noreferrer" target="_blank" href={field.url || ''}>
      <div className='flex' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <span className={`font-bold ${hover ? 'text-esrs-hover' : ''}`} >{field.title}</span>
        <ArrowElbowRightUp color={hover ? '#686868' : '#dddddd'} size={16} weight='bold' />
      </div>
    </Link>
  )
}

const FieldTitleAndSubtitle = ({ field }: MoreLinkProps) => {
  return (
    <div className='flex gap-1'>
      <span className='font-bold'>{field.title}</span>
      <span>{field.value}</span>
    </div>
  )
}

interface MoreRowProps {
  collapsed: boolean
  index: number
  children: React.ReactNode
  length: number
  date?: string
}

const MoreRow = ({ collapsed, index, children, length, date }: MoreRowProps) => {
  const [visible, setVisible] = useState(false);
  const baseDelay = 40
  useEffect(() => {
    if (collapsed) {
      const timer = setTimeout(() => setVisible(false), baseDelay * (length - index))
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => setVisible(true), baseDelay * index)
      return () => clearTimeout(timer)
    }
  }, [collapsed, index, length])

  return (
    <div className={`flex justify-between ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'} transition-all duration-100`}>
      {children}
      {date && <span>{date}</span>}
    </div>
  )
}



const MoreExpandIcon = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div className='bg-white bg-opacity-50 px-1.5 py-0.5 rounded w-[20px] h-[20px] items-center gap-1 relative flex '>
      <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
        <CaretUp weight='bold' />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${collapsed ? 'opacity-100' : 'opacity-0'}`}>
        <CaretDown weight='bold' />
      </div>
    </div>
  )
}