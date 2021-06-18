import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Style/styles";

const NavBar = () => {
  return (
    <Nav>
    <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <Link to="/Cart">
          <li>Cart</li>
        </Link>
      </ul>
    </Nav>
  );
};

export default NavBar;
