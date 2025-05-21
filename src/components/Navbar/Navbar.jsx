import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdLightMode, MdNightlight, MdMenu, MdClose } from "react-icons/md";

const mobileMenu = (toggleTheme, theme) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="mobile-menu">
      <div className="mobile-menu-toggle" onClick={toggle}>
        <MdMenu size={30} />
      </div>
      {isOpen && (
        <div className="mobile-menu-content" onClick={toggle}>
          <ul>
            <li>
              <div className="mobile-menu-toggle-close">
                <MdClose size={30} />
              </div>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/#experience">Experience</Link>
            </li>
            <li>
              <Link to="/#skills">Skills</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <a onClick={toggleTheme}>
                {theme === "light" ? (
                  <MdNightlight className="icon" size={30} />
                ) : (
                  <MdLightMode className="icon" size={30} />
                )}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const Navbar = ({ toggleTheme, theme }) => {
  const logo = "{JY}.";
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>{logo}</h1>
        </div>
        {mobileMenu(toggleTheme, theme)}
        {/* desktop menu */}
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/#experience">Experience</Link>
          </li>
          <li>
            <Link to="/#skills">Skills</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <a onClick={toggleTheme}>
              {theme === "light" ? (
                <MdNightlight className="icon" size={30} />
              ) : (
                <MdLightMode className="icon" size={30} />
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
