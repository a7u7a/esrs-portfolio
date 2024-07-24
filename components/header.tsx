import React from 'react'
const Header = () => {
  return (
    <header className='h-[300px] text-white overflow-hidden relative'>
      <div className='absolute inset-0 flex flex-col justify-center'>
        <div className='max-w-[800px] py-[40px] mx-20'>
          <h1 className='font-bold'>Esteban Serrano</h1>
          <div className='max-w-[600px] mt-8' >
            <p>I code and design digital experiences across a range of media. Mostly web.</p>
            <p className='mt-4'>
              Working with designers, artists and companies to bridge creative and technical requirements, with insight gathered over 10 years of working experience.
            </p>
            <p>Currently based in Berlin.</p>
          </div>
        </div>
      </div>
      <img className='object-cover' src="/assets/image.png" alt="" />
    </header>
  )
}

export default Header