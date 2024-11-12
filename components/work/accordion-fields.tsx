import React from 'react'
import { IProject } from '@/lib/types'
import { ArrowUpRight } from '@phosphor-icons/react'

const AccordionFields = ({ project }: { project: IProject }) => {
  return (
    <div className='w-1/2 flex flex-col'>
      {project.fields && project.fields.map((field, index) => (
        <div key={index}>
          {/* Different field variations */}
          {field.url && field.value ? (
            <div>
              <span className='font-bold pr-1.5'>{field.title}</span>
              <a className='hover:underline hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.value}</a>
            </div>
          ) : (null)}
          {field.url && !field.value ? (
            <div className='flex gap-0'>
              <a className='font-bold hover:underline hover:text-esrs-blue' href={field.url} target="_blank" rel="noopener noreferrer">{field.title}</a>
              <ArrowUpRight size={19} />
            </div>
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