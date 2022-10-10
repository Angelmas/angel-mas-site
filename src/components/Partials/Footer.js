import React from "react"
import { Link } from "gatsby"
import {
  BLOG,
  CONTACT,
} from '../../router'

const Navbar =  () => {
  return (
    <div>
      <p>loremp loremp loremp loremp</p>
      <nav>
        <ul>
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