import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


function Header() {
  return (
    <header
      className=" text-white pb-10 min-h-svh "
       
    >
      <Navbar />
      <Hero />
    </header>
  )
}

export default Header
