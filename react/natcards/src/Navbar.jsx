import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{color:'black'}}>
        <Link to='/'>    |Home</Link>
        <Link to='/Contact'>     |Contact</Link>
        <Link to='/table'>    |Tablebox</Link>
    </div>
  )
}

export default Navbar