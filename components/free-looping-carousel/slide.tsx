import React, { useCallback, useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { selectedProjects, experimentalProjects } from '@/content/projects'
import { ArrowElbowRightUp, CaretDown, CaretUp } from '@phosphor-icons/react';
import { EmblaCarouselType } from 'embla-carousel'
import Link from 'next/link';
import useMeasure from 'react-use-measure';

interface SlideProps {
  children: React.ReactNode
  slide: IGalleryItem
  onClickSlide: (index: number) => void
  index: number
  collapsed: boolean
  emblaApi: EmblaCarouselType | undefined
  // viewportWidth: number
}

const Slide = ({ children, slide, onClickSlide, index, collapsed, emblaApi }: SlideProps) => {
  const [ref, bounds] = useMeasure()
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

  const handleScroll = useCallback(() => {
    if (!emblaApi) return
    const progress = emblaApi.scrollProgress()
    const slideNodes = emblaApi.slideNodes()
    const scrollSnapList = emblaApi.scrollSnapList()
    const currentSnapPoint = scrollSnapList[index]
    const nextSnapPoint = index === slideNodes.length - 1
      ? scrollSnapList[0]  // Loop back to first slide if at end
      : scrollSnapList[index + 1]
    const slideNormalizedWidth = nextSnapPoint - currentSnapPoint
    const viewportPixelWidth = emblaApi.containerNode().clientWidth
    const scrollPixelWidth = slideNodes.reduce(
      (acc, node) => acc + node.clientWidth, 
      0
    )
    const viewportNormalizedWidth = viewportPixelWidth / scrollPixelWidth
    const leftOffset = (progress - currentSnapPoint)
    const rightOffset = -1 * (leftOffset - (slideNormalizedWidth - viewportNormalizedWidth))
    const leftProgress = Math.max(0, Math.min(1, leftOffset / slideNormalizedWidth))
    const rightProgress = Math.max(0, Math.min(1, rightOffset / slideNormalizedWidth))

    if (index === 2) {
      console.log("rightProgress", rightProgress);
      console.log("leftProgress", leftProgress);
    }
  }, [emblaApi, index])

  // Attach the scroll event listener
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('scroll', handleScroll)
      // Initial calculation
      handleScroll()
    }
    return () => {
      if (emblaApi) {
        emblaApi.off('scroll', handleScroll)
      }
    }
  }, [emblaApi, handleScroll])

  return (
    // Embla Slide
    <div ref={ref} className="shrink-0 flex flex-col pl-3 text-[0.8rem] md:text-[0.9rem]">
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
    <div className={`text-[#414141] flex flex-col gap-1.5 pt-3 p-2 cursor-default`}>
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