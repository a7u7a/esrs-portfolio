import React, { useState } from 'react'
import { IProject, IProjectField } from '@/lib/types'
import { ArrowElbowRightUp } from '@phosphor-icons/react'
import Link from 'next/link'

const AccordionFields = ({ project }: { project: IProject }) => {
  return (
    <div className='w-1/2 flex flex-col'>
      {project.fields && project.fields.map((field, index) => (
        <div key={index}>
          {/* Different field variations */}
          {field.url && field.value ? (
            <div>
              <span className='font-bold pr-1.5'>{field.title}</span>
              <Link href={field.url} target="_blank" rel="noopener noreferrer">
                <span className='hover:underline hover:text-esrs-blue'>{field.value}</span>
              </Link>
            </div>
          ) : (null)}
          {field.url && !field.value ? (
            <LinkField field={field} />
          ) : null}
          {!field.url && field.value ? (
            <div>
              <span className='font-bold pr-1.5'>{field.title}</span>
              <span>{field.value}</span>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default AccordionFields

function LinkField({ field }: { field: IProjectField }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className='max-w-min'>
      <Link className='max-w-min' href={field.url!} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className='flex gap-[2px]'>
          <span className={`font-bold ${hovered ? 'underline' : ''}`}>{field.title}</span>
          <div className='pt-[2px]'>
            <ArrowElbowRightUp weight={"bold"} color={hovered ? 'esrs-blue' : 'currentColor'} size={19} />
          </div>
        </div>
      </Link>
    </div>
  )
}