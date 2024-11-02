import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import { ArrowElbowRightUp, CaretDown, CaretUp } from '@phosphor-icons/react';
import Link from 'next/link';

interface SlideProps {
  children: React.ReactNode
  slide: IGalleryItem
}

const Slide = ({ children, slide }: SlideProps) => {
  const [hover, setHovered] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const projects = [...selectedProjects, ...experimentalProjects]
  const project = projects.find(p => p.id === slide.id)

  if (!project) throw new Error("Project not found in slide")

  useEffect(() => {
    if (!hover) {
      const timer = setTimeout(() => setToggle(true), 2500)
      return () => clearTimeout(timer)
    }
  }, [hover])

  useEffect(() => {
    if (!toggle) {
      setShowMore(true)
      const timer = setTimeout(() => setCollapsed(false), 10)
      return () => clearTimeout(timer)
    } else {
      setCollapsed(true)
      const timer = setTimeout(() => setShowMore(false), 300)
      return () => clearTimeout(timer)
    }
  }, [toggle])

  const handleClick = () => {
    if (!slide.hideMore) setToggle(!toggle)
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
          {!slide.hideMore && <MoreExpandIcon collapsed={collapsed} />}
        </div>

        {!slide.hideMore &&
          <div className={`absolute inset-x-0 bottom-0 z-20 translate-y-full ${showMore ? 'block' : 'hidden'}`}>
            <MoreCard collapsed={collapsed} project={project} />
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
    <div className={`text-[#414141] flex flex-col gap-1.5 pt-3 p-2 cursor-default`}>
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
        <ArrowElbowRightUp color={hover ? '#686868' : ''} size={16} weight='bold' />
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
        <ArrowElbowRightUp color={hover ? '#686868' : ''} size={16} weight='bold' />
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
    <div className={`${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'} transition-all duration-100`}>
      {children}
    </div>
  )
}

function HintTitle({ slide, project }: { slide: IGalleryItem, project?: IProject }) {
  return (
    <span className='bg-white bg-opacity-50 px-1.5 py-0.5 rounded flex'>
      <span>
        {slide.projectTypeOverride || project?.type}
      </span>
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