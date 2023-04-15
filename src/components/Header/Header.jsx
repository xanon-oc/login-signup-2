import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="p-4 bg-white opacity-90 text-black font-bold ">
      <ul className="flex justify-center gap-8">
        <li className="hover:text-purple-500">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li className="hover:text-purple-500">
          <NavLink to="/signUp">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
