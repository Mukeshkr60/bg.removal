import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>

      <button className="icon">
        Get started
        <img className="arrow-icon" src={assets.arrow_icon} alt="" />
      </button>
    </div>
  );
};

export default Navbar;
