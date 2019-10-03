import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="">
                <a className="title" href="/">React App</a>
                <ul className="right">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/json">Dashboard</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar