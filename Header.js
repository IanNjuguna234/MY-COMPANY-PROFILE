import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png'; // Make sure you have the logo file in the correct path

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoTitle}>
        <img src={logo} alt="CypherCloud IT Solutions Logo" className={styles.logo} />
        <h1 className={styles.title}>CYPHERCLOUD IT SOLUTIONS</h1>
      </div>
      <nav className={styles.navBar}>
        <NavLink to="/" activeClassName={styles.active} className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName={styles.active} className={styles.navLink}>
          About
        </NavLink>
        <NavLink to="/contact" activeClassName={styles.active} className={styles.navLink}>
          Contact
        </NavLink>
        <NavLink to="/my-projects" activeClassName={styles.active} className={styles.navLink}>
           Projects
        </NavLink>
        <NavLink to="/my-services" activeClassName={styles.active} className={styles.navLink}>
           Services
        </NavLink>
        {/* <NavLink to="/login" activeClassName={styles.active} className={styles.navLink}>
          Login
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
