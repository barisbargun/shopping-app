import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      
      <main className='Main'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout