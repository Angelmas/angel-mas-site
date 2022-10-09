import React from "react"
import { Link } from "gatsby"
import {
  APPLICATION_ROOT,
  BLOG,
  CONTACT,
  BEST_CONTENT,
  ABOUT
} from '../../router'

const Navbar =  () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={APPLICATION_ROOT}>Home</Link>
          </li>
          <li>
            <Link to={ABOUT}>About</Link>
          </li>
          <li>
            <Link to={BEST_CONTENT}>Best Content</Link>
          </li>
          <li>
            <Link to={BLOG}>Blog</Link>
          </li>
          <li>
            <Link to={CONTACT}>Work with me</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;