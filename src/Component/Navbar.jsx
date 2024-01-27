import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link className="a" to="">Home</Link></li>
                <li><Link className="a" to="about">About</Link></li>
                <li><Link className="a" to="footer">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav                                                      