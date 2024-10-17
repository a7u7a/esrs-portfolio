"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NavMenu = () => {
  const router = useRouter()

  return (
    <nav className="fixed top-2 mt-2 w-full flex justify-center z-50 ">
      <ul className="list-none flex gap-14 bg-gray-200 p-0.5 rounded-md font-bold">

        <div className="bg-gray-200 px-1.5 rounded hover:bg-white cursor-pointer hover:text-blue-500" onClick={() => router.push('/#selected')}>
          {"Selected"}
        </div>

        <div className="bg-gray-200 px-1.5 rounded hover:bg-white cursor-pointer hover:text-blue-500" onClick={() => router.push('/#experimental')}>
          {"Experimental"}
        </div>

        <div className="bg-gray-200 px-1.5 rounded hover:bg-white cursor-pointer hover:text-blue-500" onClick={() => router.push('/#publications')}>
          {"Publications"}
        </div>

        <div className="bg-gray-200 px-1.5 rounded hover:bg-white cursor-pointer hover:text-blue-500" onClick={() => router.push('/#contact')}>
          {"Contact"}
        </div>

      </ul>
    </nav>
  )
}

export default NavMenu