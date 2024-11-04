import React, { useEffect, useState } from 'react'
import { IGalleryItem, IProject, IProjectField } from '@/lib/types'
import { ArrowElbowRightUp, CaretDown, CaretUp } from '@phosphor-icons/react';
import Link from 'next/link';

export const FieldCTALinkTitleAndSubtitle = ({ field }: MoreLinkProps) => {
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

export const FieldCTALinkTitle = ({ field }: MoreLinkProps) => {
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

export const FieldTitleAndSubtitle = ({ field }: MoreLinkProps) => {
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

export const MoreRow = ({ collapsed, index, children, length, date }: MoreRowProps) => {
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

export const HintTitle = ({ slide, project }: { slide: IGalleryItem, project?: IProject }) => {
  return (
    <span className='bg-white bg-opacity-50 px-1.5 py-0.5 rounded flex'>
      <span>
        {slide.projectTypeOverride || project?.type}
      </span>
    </span>
  )
}

export const MoreExpandIcon = ({ collapsed }: { collapsed: boolean }) => {
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