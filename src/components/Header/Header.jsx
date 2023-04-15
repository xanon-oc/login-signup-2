import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signUp">Sign Up</NavLink>
    </nav>
  );
};

export default Header;
