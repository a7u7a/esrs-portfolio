import React from 'react'
import collaborators from "@/content/collaborators"
import services from "@/content/services"

const CVColumnRight = () => {
  return (
    <div className="col-span-1">

      <section id="collaborators">
        <h2 className="font-bold">{"People I've worked with"}</h2>
        <ul className="list-none pt-12 flex flex-col gap-3">
          {collaborators.map((collab, i) => (
            <li key={i}>
              {collab.url ? <a className="hover:underline hover:text-blue-500" href={collab.url} target="_blank" rel="noopener noreferrer">{collab.name}</a> : collab.name}
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="pt-16">
        <h2 className="font-bold">Services</h2>
        <ul className="list-none pt-12 flex flex-col gap-3">
          {services.map((service, i) => (
            <li key={i}>
              {service.title}
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}

export default CVColumnRight