import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Style/styles";
import CartIcon from "../Data/imgs/cart.png";
import Logo from "../Data/imgs/logo.png";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
      <img className="logo" src={Logo} alt="Rezze"/>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
        <Link to="/Cart">
          <li><img src={CartIcon} alt="Cart"/></li>
        </Link>
      </ul>
    </Nav>
  );
};

export default NavBar;
