import "./NavbarStyle.css"

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
//import { useState } from "react";
const Navbar = () => {
    const [click, setclick] = useState(false);
    const handleclick = () => setclick(!click);
    const [color, setcolor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setcolor(true);
        } else {
            setcolor(false);
        }
    };
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/project'>project</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleclick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}


            </div>
        </div>
    );
};

export default Navbar;