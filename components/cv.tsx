import CVPublications from '@/components/cv-publications'
import CVCollaborators from '@/components/cv-collaborators'
import CVContact from '@/components/cv-contact'
import CVEducation from '@/components/cv-education'
import Footer from './footer'
import CVServices from "./cv-services"
import { div } from 'framer-motion/client'

const CV = () => {
  return (
    <>
      <div className='hidden md:block'>
        <CVDesktop />
      </div>
      <div className='block md:hidden'>
        <CVMobile />
      </div>
    </>
  )
}

export default CV

const CVDesktop = () => {
  return (
    <div className="grid grid-cols-4">

      <div className="col-span-3">
        <CVPublications />
        <div className='pt-16'>
          <CVEducation />
        </div>
        <div className='pt-16'>
          <CVContact />
        </div>
        <Footer />
      </div>

      <div className="col-span-1">
        <CVCollaborators />
        <CVServices />
      </div>
    </div>
  )
}

const CVMobile = () => {
  return (
    <div>
      <CVPublications />
      <div className='flex pt-12 gap-2'>

        <div className='w-1/2'>
          <CVEducation />
          <div className='pt-12'>
            <CVServices />
          </div>
          <Footer />
        </div>

        <div className='w-1/2'>

          <CVCollaborators />

          <div className='pt-12'>
            <CVContact />
          </div>

        </div>
      </div>
    </div>
  )
}