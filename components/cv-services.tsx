import React from 'react'
import services from '@/content/services'

const CVServices = () => {
  return (
    <section id="services">
      <h2 className="font-bold tracking-wide">Services</h2>
      <ul className="list-none pt-6 sm:pt-12 flex flex-col gap-3">
        {services.map((service, i) => (
          <li key={i}>
            {service.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CVServices