"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NavMenu = () => {
  const router = useRouter()

  return (
    <nav className="sticky top-3 mt-2 w-full z-50 ">
      <ul className="list-none flex items-center gap-8 justify-between sm:justify-start ">
        <NavButton title="Selected" href="/#selected" />
        <NavButton title="Experimental" href="/#experimental" />
        <NavButton title="Publications" href="/#publications" />
        <NavButton title="Contact" href="/#contact" />
      </ul>
    </nav>
  )
}

export default NavMenu


const NavButton = ({ title, href }: { title: string, href: string }) => {
  const router = useRouter()
  return (
    <div className="cursor-pointer hover:text-esrs-blue pt-[2px] font-bold tracking-wide" onClick={() => router.push(href)}>
      {title}
    </div>
  )
}