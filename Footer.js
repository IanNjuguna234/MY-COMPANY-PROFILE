// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // You'll style the footer here

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/my-projects">Projects</Link>
                    <Link to="/my-services">Services</Link>
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} CypherCloud IT Solutions. All Rights Reserved.</p>
                    <p>Your Partner in Tech Excellence</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
