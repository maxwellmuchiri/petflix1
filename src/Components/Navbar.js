// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
}

export default Navbar;
