import React from 'react'
import publications from "@/content/publications"

const CVPublications = () => {
    return (
      <section id="publications">
      <h2 className="font-bold">Publications</h2>
      <ul className="list-none pt-6 sm:pt-12 flex flex-col gap-3 max-w-[600px] mr-4 text-pretty">
        {publications.map((pub, i) => (
          <li key={i}>
            {pub.url ? <a className="hover:underline hover:text-esrs-blue" href={pub.url} target="_blank" rel="noopener noreferrer">{pub.text}</a> : pub.text}
          </li>
        ))}
      </ul>
    </section>
    )
}

export default CVPublications