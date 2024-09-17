import React from 'react'
const NavMenu = () => {
  return (
    <div className="w-full">
      <nav className="flex gap-8 w-max m-auto" >
        <section className="font-bold bg-gray-200 px-1.5 rounded" >Selected Projects</section>
        <section>Experimental Work</section>
        <section>Publications</section>
        <section>Clients</section>
        <section>Services</section>
        <section>Contact</section>
      </nav>
    </div>
  )
}

export default NavMenu