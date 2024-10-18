import React from 'react'
import education from "@/content/education"

const CVEducation = () => {
  return (
    <section id="education">
      <h2 className="font-bold">Education</h2>
      <ul className="list-none pt-6 sm:pt-12 flex flex-col gap-3 max-w-[600px]">
        {education.map((edu, i) => (
          <li key={i}>
            {edu.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CVEducation