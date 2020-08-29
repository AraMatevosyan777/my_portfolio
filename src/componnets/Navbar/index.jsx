import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import { Layout } from 'antd';

const Navbar = () => {
    const { Sider } = Layout;
    return(
        <Sider width='17%' className='nav'>
            <nav className="navItem">
                <li>
                    <NavLink activeClassName='active' to='/home'>Home</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName='active' to='/about-me'>About Me</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName='active' to='/skills'>Skills</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName='active' to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink  activeClassName='active' to='/contact-me'>Contacts</NavLink>
                </li>
            </nav>
        </Sider>
    )
}

export default Navbar;