import React from "react";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ul>
                <li>
                <NavLink to="/" className={({isActive})=>  isActive ? 'isActive-link' : ''}>Home</NavLink>    
                </li>
                <li>
                <NavLink to="/about" className={({isActive})=>  isActive ? 'isActive-link' : ''}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({isActive})=>  isActive ? 'isActive-link' : ''}>DashBoard</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Navbar
