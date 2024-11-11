import React from 'react'
import socials from "@/content/socials"

const CVContact = () => {
  return (
    <section id="contact">
      <h2 className="font-bold">{"Contact"}</h2>
      <div className="pt-6 sm:pt-12">
        <ul className="list-none flex flex-col max-w-[600px]">
          <li key={1}>
            <a className="hover:underline hover:text-esrs-blue" href="mailto:esteban@esrs.co">esteban@esrs.co</a>
          </li>
        </ul>
        <ul className="list-none flex flex-wrap gap-3 pt-3">
          {socials.map((social, i) => (
            <li key={i} >
              <a className="underline hover:text-esrs-blue" href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CVContact