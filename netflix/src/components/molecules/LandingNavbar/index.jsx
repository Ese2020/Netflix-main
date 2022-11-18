import React from "react";
import logo from "../../../assets/Logonetflix.png";
import { Image } from "../../atoms/Image";
import { Nav, NavLeft, NavRight } from "./app";
import { Link } from "react-router-dom";

export const LandingNavbar = () => {
  return (
    <>
      <Nav>
        <NavLeft>
          <Image src={logo} alt="logo" className="landing-logo" />
        </NavLeft>
        <NavRight>
          <Link to="/signin">
            <button className="landing-nav-btn">Sign In</button>
          </Link>
        </NavRight>
      </Nav>
    </>
  );
};
