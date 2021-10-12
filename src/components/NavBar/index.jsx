import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

const NavBar = () => {
    return (
        <nav className='nav-container'>
            <div className='nav-heading'>
                <Link to='/' className='nav-heading'>
                    Smart Expenser <i className="fi fi-rr-credit-card"></i>
                </Link>
            </div>
            <div className='nav-body'>
                <a href="https://github.com/niteshshetye" target='_blank' rel='noopener noreferrer'>
                    <i className="devicon-github-original colored"></i>
                    GitHub
                </a>
            </div>
        </nav>
    )
}

export default NavBar
