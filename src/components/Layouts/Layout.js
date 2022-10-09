import React from "react"
import Navbar from "./Header"
import Footer from "./Footer"

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