import React from "react"

const Navbar =  () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}  <span>Angel Mas</span> Built with {" "} 
        <a href="https://www.gatsbyjs.com/">Gatsby JS</a>
      </p>
    </footer>
  )
}

export default Navbar;