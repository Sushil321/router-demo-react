import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar(){
    return(
        <>
         <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/channel/">Channel</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
         </ul>
        </>

    )
}export default Navbar;