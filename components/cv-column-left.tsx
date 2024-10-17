import React from 'react'
import publications from "@/content/publications"
import education from "@/content/education"
import socials from "@/content/socials"

const CVColumnLeft = () => {
  return (
    <div className="col-span-3">

      <section id="publications">
        <h2 className="font-bold">Publications</h2>
        <ul className="list-none pt-12 flex flex-col gap-3 max-w-[600px] mr-4">
          {publications.map((pub, i) => (
            <li key={i}>
              {pub.url ? <a className="hover:underline hover:text-blue-500" href={pub.url} target="_blank" rel="noopener noreferrer">{pub.text}</a> : pub.text}
            </li>
          ))}
        </ul>
      </section>

      <section id="education" className="pt-16">
        <h2 className="font-bold">Education</h2>
        <ul className="list-none pt-12 flex flex-col gap-3 max-w-[600px]">
          {education.map((edu, i) => (
            <li key={i}>
              {edu.title}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="pt-16">
        <h2 className="font-bold">{"Contact"}</h2>
        <div className="pt-12">
          <ul className="list-none flex flex-col max-w-[600px]">
            <li key={1}>
              <a className="hover:underline hover:text-blue-500" href="mailto:esteban@esrs.co">esteban@esrs.co</a>
            </li>
          </ul>
          <ul className="list-none flex gap-3 pt-3">
            {socials.map((social, i) => (
              <li key={i} >
                <a className="underline hover:text-blue-500" href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="pt-16 max-w-[600px]">
        <p>{"© 2024"}</p>
        <p>{"All rights reserved."}</p>
        <p>{"This website shows a selected view of my work."}</p>
        <p>{"Licensed under CC BY-NC-SA 4.0."}</p>
        <p className="pt-2">{"Last update: "}{process.env.NEXT_PUBLIC_BUILD_DATE}</p>
      </footer>

    </div>
  )
}

export default CVColumnLeft