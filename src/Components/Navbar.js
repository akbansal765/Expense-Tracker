import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar_component'>
      <ul className='list_content'>
        <li>
            <Link to="/">HOME</Link>
        </li>
        <li>
            <Link to="/table">DOWNLOAD - STATEMENT</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
