import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
const Nav = ()=>{
    return(
    <div className="">
       <nav className="navbar navbar-expand-lg navbar-light topnav navposition">
            <Link className="navbar-brand nav-title" id="logo" to="/">Capture</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNav">
                <ul className="navbar-nav ms-auto nav-element">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
    </nav>
</div>
)};
export default Nav;