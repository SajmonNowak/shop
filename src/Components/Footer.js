import React from "react";
import { Link } from "react-router-dom";
import { FooterBar } from "../Style/styles";

const Footer = () => {
  return (
    <FooterBar>
      <div className="topFooter">
        <div>
          <p>Sign in for newsletter</p>
          <span>
          <input placeholder="adress@mail.com" />
          <i>{'>'}</i>
          </span>
        </div>
        <div className="sM">
            <Link to={{ pathname: "https://Instagram.com" }} target="_blank">
        <i class="fab fa-instagram"></i>
        </Link>
        <Link to={{ pathname: "https://Pinterest.com" }} target="_blank">
        <i class="fab fa-pinterest"></i>
        </Link>
        </div>
      </div>
      <div className="botFooter">
        <p className="rights">
          2016-2021 Rezze S.p.A. - All rights reserved
        </p>
      </div>
    </FooterBar>
  );
};

export default Footer;
