import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>HancyWeb</h1>
      <div>
        <Link to="/">Login</Link>
        <Link to="/user">User Panel</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>
    </nav>
  );
}

export default Navbar;