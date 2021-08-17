import React, { useState } from "react";
import CustomHead from "../CustomHead";
import Header from "./Header";
import Footer from "./Footer";
import { NavbarDisplayContext } from "../../context/NavbarDisplayContext";

const Layout = ({ children }) => {
  const [navDisplay, setNavDisplay] = useState(false);

  const toggleNavDisplay = () => {
    setNavDisplay(!navDisplay);
  };

  const closeNavbar = () => {
    if (navDisplay) setNavDisplay(false);
  };

  return (
    <>
      <CustomHead />
      <NavbarDisplayContext.Provider
        value={{ navDisplay: navDisplay, toggleNavDisplay: toggleNavDisplay }}
      >
        <div className="container" onClick={() => closeNavbar()}>
          <Header />
          {children}
          <Footer />
        </div>
      </NavbarDisplayContext.Provider>
    </>
  );
};
export default Layout;
