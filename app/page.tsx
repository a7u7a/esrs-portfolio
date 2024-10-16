import Project from "@/components/project";
import Header from "@/components/header";
import { selectedProjects, experimentalProjects } from '@/content/projects'
import NavMenu from "@/components/navmenu";
import Logo from "@/components/logo";
import collaborators from "@/content/collaborators"
import CV from "@/components/cv"

export default async function Home() {
  return (
    <main className="text-[14px] flex flex-col items-center ">

      {/* <div className="fixed w-full flex items-center justify-end" >
        <div className="w-[100px] h-[100px]">
          <Logo />
        </div>
      </div> */}

      <Header />

      <div className='pb-[400px] max-w-5xl mx-8'>
        <div className="h-[30px] w-full"/>

        <NavMenu />



        <section id="selected">
          <ul className="pt-36 list-none flex flex-col">
            {selectedProjects.map((project, i) => (
              <li key={i} className=''>
                <Project key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <section id="experimental">
          <div className="grid grid-cols-4 w-full font-bold">
            <h2>Experimental Work</h2>
            <h2 className='col-span-2'>What</h2>
            <h2 className=' text-right'>Date</h2>
          </div>

          <ul className="pt-12 list-none flex flex-col gap-1">
            {experimentalProjects.map((project, i) => (
              <li key={i}>
                <Project key={i} project={project} />
              </li>
            ))}
          </ul>
        </section>

        <div className="pt-48">
          <CV />
        </div>


      </div >
    </main>
  );
}
