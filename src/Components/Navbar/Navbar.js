import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import navbarLogo from "../../images/bitcoin_navbar-logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar__container">
      <div className="navbar__logo">
        <img style={{ width: "80px" }} src={navbarLogo} alt="navbarLogo" />
      </div>
      <div className="nav_Links">
        <p>Home</p>
        <p>Details</p>
        <p>Contace</p>
        <p>Address</p>
        <p>Items</p>
      </div>
      <div className="navbar__mobile-navigation">
        <div className="navbar__mobile-nav_react-icons">
          {mobileMenu ? (
            <GrClose
              size="40px"
              color="white"
              style={{ cursor: "pointer" }}
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <AiOutlineMenu
              size="40px"
              color="white"
              style={{ cursor: "pointer" }}
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
        {mobileMenu && (
          <div className="mobile__navigation-links scale-up-top">
            <p onClick={() => setMobileMenu(false)}>Home</p>
            <p onClick={() => setMobileMenu(false)}>Details</p>
            <p onClick={() => setMobileMenu(false)}>Contact</p>
            <p onClick={() => setMobileMenu(false)}>Address</p>
            <p onClick={() => setMobileMenu(false)}>Items</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
