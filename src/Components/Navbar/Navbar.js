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
        {mobileMenu && (
          <div className="mobile__navigation-links">
            <p>Home</p>
            <p>Details</p>
            <p>Contace</p>
            <p>Address</p>
            <p>Items</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
