import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div  className='allmain'>


            <div className='navinner'>

                <div className='navLogo'>    <h3>PERSONAL PROTFOLIO</h3> </div>

                <div className='navtext'>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/Contact'} >Contact</Link>
                    <Link to={'/Resume'} >Resume</Link>
                    <Link to={'/About'} >About</Link>
                </div>

            </div>

        </div>


    )
}

export default Navbar