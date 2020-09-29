import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css'
const NavBar = (props) => {
    const location = useLocation();
    console.log(location.pathname);

    const isActive = (linkPath) => {
        if (location.pathname === linkPath) {
            return 'active'
        } else {
            return 'inactive'
        }
    }
    return (
        <header>
            <div className = {"topnav dad-" + isActive('/dad')}>
                <Link className={'home-' + isActive('/')} to='/'>Home</Link>
                <Link className={'about-' + isActive('/about')} to='/about'>About</Link>
                <Link className={'portfolio-' + isActive('/portfolio')} to='/portfolio'>Portfolio</Link>
                {/* <Link className={'mom-' + isActive('/dad')} to='/dad'>Dad</Link> */}
            </div>
        </header>

    )
}

export default NavBar;