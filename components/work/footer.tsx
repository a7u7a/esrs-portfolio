import React from 'react'
const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={className}>
      <p>{"© 2024"}</p>
      <p>{"All rights reserved."}</p>
      <p>{"This website shows a selected view of my work."}</p>
      <p>{"Licensed under CC BY-NC-SA 4.0."}</p>
      <p>{"Typeset in "}<a className='hover:underline' href="https://lineto.com/typefaces/medium" target="_blank" rel="noopener noreferrer">{"LL Medium"}</a></p>
      <p className="pt-2">{"Last update: "}{process.env.NEXT_PUBLIC_BUILD_DATE}</p>
    </footer>
  )
}

export default Footer