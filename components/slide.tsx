import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import useMeasure from 'react-use-measure'
import { ArrowElbowRightUp, CaretDown, CaretUp } from '@phosphor-icons/react';
import Link from 'next/link';

interface SlideProps {
  children: React.ReactNode
  slide: IGalleryItem
}

const Slide = ({ children, slide }: SlideProps) => {
  const [ref, bounds] = useMeasure()
  const [hover, setHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const projects = [...selectedProjects, ...experimentalProjects]
  const project = projects.find(p => p.id === slide.id)

  if (!project) throw new Error("Project not found in slide")

  useEffect(() => {
    if (!hover) {
      setShowMore(false)
    }
  }, [hover])

  const handleClick = () => {
    if (!slide.hideMore) setShowMore(!showMore)
  }

  return (
    // Embla Slide
    <div className="shrink-0 flex flex-col pl-2 text-[0.8rem] md:text-[0.9rem]" onMouseLeave={() => setHovered(false)}>
      <div className={`relative ${slide.hideMore ? "cursor-auto" : "hover:cursor-pointer"}`} onClick={handleClick} onMouseEnter={() => setHovered(true)} >
        <div ref={ref} className='h-[250px] md:h-[450px] relative'>
          <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent h-[80px] z-10 rounded-b-lg transition-opacity duration-200 ${hover ? 'opacity-50' : 'opacity-0'}`} />
          {children}
        </div>

        <div className={`z-20 absolute mx-1 my-1 bottom-0 inset-x-0 flex justify-between gap-9 transition-opacity duration-200 ${hover ? 'opacity-100' : 'opacity-0'}`}>
          <HintTitle slide={slide} project={project} />
          {!slide.hideMore && <MoreExpandIcon collapsed={!showMore} />}
        </div>

        {!slide.hideMore &&
          <div className='absolute inset-x-0 bottom-0 z-20 translate-y-full'>
            <MoreCard maxWidth={bounds.width} collapsed={!showMore} project={project} />
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
  maxWidth: number
}

const MoreCard = ({ collapsed, project, maxWidth }: MoreProps) => {
  return (
    <div className={`text-[#414141] flex flex-col gap-1 pt-3 p-2`}>
      {project?.fields && project.fields.map((field, index) => (
        <MoreRow key={index} collapsed={collapsed} index={index} length={project.fields?.length || 0}>
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
  return (
    <div className='flex gap-1'>
      <span className='font-bold'>{field.title}</span>
      <Link rel="noopener noreferrer" target="_blank" href={field.url || ''}>{field.value}</Link>
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
        <div className={`font-bold ${hover ? 'text-esrs-blue' : ''}`} >{field.title}</div>
        <ArrowElbowRightUp color={hover ? '#3b83f6' : '#151515'} size={19} />
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
}

const MoreRow = ({ collapsed, index, children, length }: MoreRowProps) => {
  const [visible, setVisible] = useState(false);
  const baseDelay = 50
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
    <div className={`${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-0.5'} transition-all duration-300`}>
      {children}
    </div>
  )
}

function HintTitle({ slide, project }: { slide: IGalleryItem, project?: IProject }) {
  return (
    <span className='bg-white bg-opacity-50 px-1.5 py-0.5 rounded'>
      {slide.projectTypeOverride || project?.type}
    </span>
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