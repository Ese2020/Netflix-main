import React from "react";
import logo from "../../../assets/Logonetflix.png";
import { Image } from "../../atoms/Image";
import { Nav, NavLeft, NavRight } from "./app";
import { Link } from "react-router-dom";

export const RegistrationNavbar = () => {
  return (
    <>
      <Nav>
        <NavLeft>
          <Image src={logo} alt="logo" className="registration-logo" />
        </NavLeft>
        <NavRight>
          <Link to="/signin">
            <button className="registration-nav-btn">Sign In</button>
          </Link>
        </NavRight>
      </Nav>
    </>
  );
};
