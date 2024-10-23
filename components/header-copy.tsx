const HeaderCopy = () => {
  return (
    <div className='absolute inset-x-0 bottom-0 mx-3 md:mx-8 flex flex-col justify-center items-center' >
      <div className='max-w-5xl pt-[40px] pb-[80px] w-full'>
        <h1 className='w-max font-bold tracking-wide'>Esteban Serrano</h1>
        <div className='max-w-[700px] mt-8 text-pretty'>
          <p>{"I code and design digital experiences across a range of media. Mostly web."}</p>
          <div className='mt-4'>
            <p>{"Working on projects that bridge design and software development."}</p>
            <p>{"With over 10 years of experience developing with companies, designers, artists and academia."}</p>
          </div>
          <div className='mt-4'>
            <p>{"Currently based in Berlin."}</p>
          </div>
          {/* <button className='mt-4 underline'>More</button> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderCopy