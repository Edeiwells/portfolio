import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src="./logo_CNA.png" alt="CNA Logo" />
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" className={({ isActive }) => (isActive ? 'active' : '')}>
                WORKS
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;