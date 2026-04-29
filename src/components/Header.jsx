import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header(){
    const [isActive, setIsActive] = useState(false);

    return (
        <header>
            <h2 className="logo">Njeri's Delights</h2>
            <nav className={`nav-menu ${isActive ? 'active' : ''}`}>
                {/* <ul className="navbar">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul> */}
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-purple-400 to-pink-200 p-2 border border-gray/20 rounded-xl" : "text-gray-600"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-purple-400 to-pink-200 p-2 border border-gray/20 rounded-xl" : "text-gray-600"}
                >
                    About
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-purple-400 to-pink-200 p-2 border border-gray/20 rounded-xl" : "text-gray-600"}
                >
                    Skills
                </NavLink>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) => isActive ? "font-bold bg-gradient-to-r from-purple-400 to-pink-200 p-2 border border-gray/20 rounded-xl" : "text-gray-600"}
                >
                    Contacts
                </NavLink>
            </nav>
            <div className="hamburger-icon" onClick={() => setIsActive(!isActive)}>
                {isActive ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
        </header>
    )
}

export default Header;