import collaborators from "@/content/collaborators"
import publications from "@/content/publications"
import services from "@/content/services"
import education from "@/content/education"
import socials from "@/content/socials"

const CV = () => {
  return (
    <div className="grid grid-cols-4">

      <div className="col-span-3">

        <section id="publications">
          <h2 className="font-bold">Publications</h2>
          <ul className="list-none pt-12 flex flex-col gap-6 max-w-[600px] mr-4">
            {publications.map((publication, i) => (
              <li key={i}>
                {publication.text}
              </li>
            ))}
          </ul>
        </section>

        <section id="education" className="pt-16">
          <h2 className="font-bold">Education</h2>
          <ul className="list-none pt-12 flex flex-col gap-1 max-w-[600px]">
            {education.map((education, i) => (
              <li key={i}>
                {education.title}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="pt-16">
          <h2 className="font-bold">{"Contact"}</h2>
          <div className="pt-12">
            <ul className="list-none flex flex-col gap-1 max-w-[600px]">
              <li key={1}>
                <a className="hover:underline" href="mailto:esteban@esrs.co">esteban@esrs.co</a>
              </li>
            </ul>
            <ul className="list-none flex gap-3 pt-2 ">
              {socials.map((social, i) => (
                <li key={i} >
                  <a className="underline" href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
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

      <div className="col-span-1 text-right">

        <section id="collaborators">
          <h2 className="font-bold">{"People I've worked with"}</h2>
          <ul className="list-none pt-12 flex flex-col gap-1">
            {collaborators.map((collaborator, i) => (
              <li key={i}>
                {collaborator.url ? <a className="hover:underline" href={collaborator.url} target="_blank" rel="noopener noreferrer">{collaborator.name}</a> : collaborator.name}
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="pt-16">
          <h2 className="font-bold">Services</h2>
          <ul className="list-none pt-12 flex flex-col gap-1">
            {services.map((service, i) => (
              <li key={i}>
                {service.title}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  )
}

export default CV