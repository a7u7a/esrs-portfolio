import Project from "@/components/project";
import Header from "@/components/header";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import NavMenu from "@/components/navmenu";
import Logo from "@/components/logo";
import collaborators from "@/content/collaborators"
import CV from "@/components/cv"

interface DividerProps {
  title: string
  subtitle?: string
}

const Divider = ({ title, subtitle = "" }: DividerProps) => {
  return (
    <div className="grid grid-cols-4 w-full font-bold">
      <h2>{title}</h2>
      <h2 className='col-span-2'>{subtitle}</h2>
      <h2 className=' text-right'>Date</h2>
    </div>
  )
}

export default async function Home() {
  return (
    <main className="text-[14px] flex flex-col items-center ">

      {/* <div className="fixed w-full flex items-center justify-end" >
        <div className="w-[100px] h-[100px]">
          <Logo />
        </div>
      </div> */}

        <NavMenu />
      <Header />

      <div className='pb-[200px] max-w-5xl mx-8'>
        <div className="h-[30px] w-full" />


        <section className="pt-12" id="selected">
          <Divider title="Selected Work" />

          <ul className="pt-12 list-none flex flex-col gap-2">
            {selectedProjects.map((project, i) => (
              <li key={i} className=''>
                <Project key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-36" id="experimental">
          <Divider title="Experimental Work" subtitle="What" />

          <ul className="pt-12 list-none flex flex-col gap-2">
            {experimentalProjects.map((project, i) => (
              <li key={i}>
                <Project key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <div className="pt-36">
          <CV />
        </div>


      </div >
    </main>
  );
}
