import Link from 'next/link'
import React from 'react'
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
      <p>{"Page not found :("}</p>
      <Link className='underline decoration-4 underline-offset-4' href="/">Go back</Link>
    </div>
  )
}

export default NotFound