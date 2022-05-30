import React from "react";
import Style from "./nav.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

export const Nav = () => {
  return (
    <>
      <nav className={Style.navbar}>
          <div>
            <h3>Restaurant portalen</h3>
            <img src={Logo} />

          </div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/restaurants"}>Restaurants</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </>
  );
};
