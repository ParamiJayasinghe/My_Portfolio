import React from "react";
import "./nav bar.css";
import logo from "../../images/p logo.png"
import {Link} from "react-scroll"

const Navbar = () => {
    return(
        <nav className="navbar">
             <img src={logo} alt="Logo" className="logo" /> 
            <div className="desktopMenu">
                <Link className="desktopMenuList">Home</Link>
                <Link className="desktopMenuList">About Me</Link>
                <Link className="desktopMenuList">Portfolio</Link>
                <Link className="desktopMenuList">Clients</Link>

            </div>
            <button className="desktopMenuBtn">
                <img src="" alt="" className="desktopMenuImg" />
                Contact Me
            </button>
        </nav>
    ) 
}

export default Navbar