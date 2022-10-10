import React from "react"
import { Link } from "gatsby"
import {
  APPLICATION_ROOT,
  BLOG,
  CONTACT,
  BEST_CONTENT,
  ABOUT
} from '../../router'

import { FiAlignJustify } from 'react-icons/fi'
import logo from '../../assets/images/logo.svg'

const Navbar =  () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply asx"/>
          </Link>
          <button className="nav-btn">
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link 
            to={APPLICATION_ROOT} 
            className="nav-link" 
            activeClassName="active-link"
          >
            Home
          </Link>
          <Link 
            to={ABOUT} 
            className="nav-link"
            activeClassName="active-link"
          >
            About
          </Link>
          <Link 
            to={BLOG} 
            className="nav-link"
            activeClassName="active-link"
            >
              Blog
            </Link>
            <Link 
              to={BEST_CONTENT} 
              className="nav-link"
              activeClassName="active-link"
            >
            Contact
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
