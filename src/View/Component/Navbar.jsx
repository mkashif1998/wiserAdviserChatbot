import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };


    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand ">
                        <img className='brndLogo' src={Logo} alt='logo' />
                        <NavLink to="/">Wiser-Adviser</NavLink>
                </div>
                <nav className='navLinks'>
                    <div className="nav-mobile">
                        <NavLink id="navbar-toggle" onClick={toggleMobileMenu} className={isMobile ? 'active' : ''}>
                            <span></span>
                        </NavLink>
                    </div>
                    <ul className={`nav-list ${isMobile ? 'active' : ''}`}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/liveChat">Live Chat</NavLink></li>
                        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
