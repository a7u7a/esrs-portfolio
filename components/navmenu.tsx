"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NavMenu = () => {
  const router = useRouter()

  return (
    <nav className="sticky top-2 mt-2 w-full flex justify-center z-50 ">
      <ul className="list-none flex gap-14 bg-gray-200 p-0.5 rounded-md">

        <div className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white cursor-pointer" onClick={() => router.push('/#selected')}>
          {"Selected Projects"}
        </div>

        <div className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white cursor-pointer" onClick={() => router.push('/#experimental')}>
          {"Experimental Work"}
        </div>

        <div className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white cursor-pointer" onClick={() => router.push('/#publications')}>
          {"Publications"}
        </div>

        <div className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white cursor-pointer" onClick={() => router.push('/#contact')}>
          {"Contact"}
        </div>

      </ul>
    </nav>
  )
}

export default NavMenu