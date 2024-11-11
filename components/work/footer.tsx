import React from 'react'
const Footer = () => {
  return (
    <footer className="pt-12 max-w-[600px]">
      <p>{"© 2024"}</p>
      <p>{"All rights reserved."}</p>
      <p>{"This website shows a selected view of my work."}</p>
      <p>{"Licensed under CC BY-NC-SA 4.0."}</p>
      <p className="pt-2">{"Last update: "}{process.env.NEXT_PUBLIC_BUILD_DATE}</p>
    </footer>
  )
}

export default Footer