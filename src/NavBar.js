import React from 'react';
// import './NavBar.css'
import './NavBar1.css'

const NavBar = () => {
    return ( <nav>
        <ul className='NavBar'>
            <li className='NavBtn red'>Home</li>
            <li className='NavBtn orange'>Projects</li>
            <li className='NavBtn yellow'>Profile</li>
            <li className='NavBtn green'>Services</li>
            <li className='NavBtn blue'>Settings</li>
            <li className='NavBtn purple'>Log Out</li>
        </ul>
    </nav> );
}
 
export default NavBar;