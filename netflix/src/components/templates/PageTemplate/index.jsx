import React from "react";
import { Footer } from "../../molecules/Footer";
import { NavBar } from "../../molecules/NavBar";

export const PageTemplate = ({ header, footer, children }) => {
  return (
    <>
      {!header ? <NavBar /> : header}
      <main>{children}</main>
      {!footer ? <Footer /> : footer}
    </>
  );
};
