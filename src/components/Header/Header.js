import React from "react";
import { Link } from "react-router-dom";
import rocket from "../../images/rocket.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Rocket Finder</div>
      </Link>

      <div className="user-image">
        <img src={rocket} alt="user" />
      </div>
    </div>
  );
};

export default Header;
