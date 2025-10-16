import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io5";

const Navbar = () => {
    const links = <> 
        <li><NavLink to='/' className={({isActive}) =>isActive ? "!text-blue-600 font-bold underline" : "text-black"}>Home</NavLink></li>  
        <li><NavLink to='/allApps' className={({isActive}) =>isActive ? "!text-blue-600 font-bold underline" : "text-black"}>Apps</NavLink></li>
        <li><NavLink >Installation</NavLink></li>

        {/* <Link to='/'><li>Home</li></Link>  
        <Link to='/allApps'><li>Apps</li></Link>
        <Link><li>Installation</li></Link>  */}
        {/* try creating links object with name & to keys with link.map() instead of lnk tag  */}
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                <img src="../../assets/logo.png" alt="" />
                </div>
    
                <Link to='/'>One@pp</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Shahoriar-Shoaeb' className="btn"><IoLogoGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;