import React from "react"
import Navbar from "./Header"
import Footer from "./Footer"

import '../../assets/scss/resources.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>

       {children}
      </div>
       <Footer />
    </>
  )
}

export default Layout