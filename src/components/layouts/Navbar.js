import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <Link to="/Home" className={styles.logoContainer}>
                    <img src={logo} alt="Costs" className={styles.logo} />
                </Link>

                <ul className={styles.desktopMenu}>
                    <li className={styles.item}><Link to="/Home">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projects</Link></li>
                    <li className={styles.item}><Link to="/company">Company</Link></li>
                    <li className={styles.item}><Link to="/newproject">New Project</Link></li>
                    <li className={styles.item}><Link to="/contact">Contact</Link></li>
                </ul>

                <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {isMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <ul>
                            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                            <li><Link to="/company" onClick={toggleMenu}>Company</Link></li>
                            <li><Link to="/newproject" onClick={toggleMenu}>New Project</Link></li>
                            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;