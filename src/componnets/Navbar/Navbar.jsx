import React from 'react';
import './Navbar.css';
import './NavbarMedia.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className='nav'>
            <div className="navItem">
                <div>
                    <NavLink to='/home'>Home</NavLink>
                </div>
                <div>
                    <NavLink to='/about_me'>About Me</NavLink>
                </div>
                <div>
                    <NavLink to='/Skills'>Skills</NavLink>
                </div>
                <div>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </div>
                <div>
                    <NavLink to='/contact_me'>Contacts</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;