import React from 'react'
import collaborators from "@/content/collaborators"

const CVCollaborators = () => {
  return (
    <section id="collaborators">
      <h2 className="font-bold">{"People I've worked with"}</h2>
      <ul className="list-none pt-6 sm:pt-12 flex flex-col gap-3">
        {collaborators.map((collab, i) => (
          <li key={i}>
            {collab.url ? <a className="hover:underline hover:text-blue-500" href={collab.url} target="_blank" rel="noopener noreferrer">{collab.name}</a> : collab.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CVCollaborators