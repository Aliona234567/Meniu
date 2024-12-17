import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
   <nav>
    <Link to="/" className='title'>Logo</Link>
    <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contsct">Contsct</Link></li>

    </ul>
   </nav>
  )
}

export default Navbar
