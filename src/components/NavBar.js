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
        // <header className="navbar">
        //     <nav className="navbar__navigation">
        //         <div></div>
        //         <div className='spacer'/>
        //         <div className="navbar_navigation-items">
        //             <ul>
        //                 <li><Link className={isActive('/')} to='/'>Home</Link></li>
        //                 <li><Link className={isActive('/about')} to='/about'>About</Link></li>
        //                 <li><Link className={isActive('/portfolio')} to='/portfolio'>Portfolio</Link></li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>

        <header>
            <div className = "topnav">
                <Link className={'portfolio-' + isActive('/portfolio')} to='/portfolio'>Portfolio</Link>
                
                <Link className={'about-' + isActive('/about')} to='/about'>About</Link>
                <Link className={'home-' + isActive('/')} to='/'>Home</Link>
            </div>
        </header>

    )
}

export default NavBar;