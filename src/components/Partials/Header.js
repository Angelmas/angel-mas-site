import React, { useState } from "react"
import { Link } from "gatsby"
import {
  APPLICATION_ROOT,
  ABOUT,
  BLOG,
} from '../../router'

import { FiAlignJustify } from 'react-icons/fi'
import logo from '../../assets/images/logo.svg'
import './Header.scss'

export const ROOT_CLASS = 'navbar';

const Navbar =  () => {
  const [show, setShow] = useState(false)

  return (
    <nav className={ROOT_CLASS}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={APPLICATION_ROOT}>
            <img src={logo} alt="Angel"/>
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link 
            to={ABOUT} 
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link 
            to={BLOG} 
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
            >
              Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
