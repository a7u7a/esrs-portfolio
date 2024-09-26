import React from 'react'
const NavMenu = () => {
  return (
    <nav className="sticky top-2 mt-2 w-full flex justify-center z-50 ">
      <ul className="list-none flex gap-14 bg-gray-200 p-0.5 rounded-md bg-opacity-50">

        <a className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white" href="/#selected">
          {"Selected Projects"}
        </a>

        <a className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white" href="/#experimental">
          {"Experimental Work"}
        </a>

        <a className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white" href="/#publications">
          {"Publications"}
        </a>

        <a className="font-bold bg-gray-200 px-1.5 rounded text-gray-600 hover:text-black hover:bg-white" href="/#contact">
          {"Contact"}
        </a>

      </ul>
    </nav>
  )
}

export default NavMenu