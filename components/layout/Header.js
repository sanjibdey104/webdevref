import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const HeaderComponent = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <HeaderComponent className="header">
      <Logo />
      <Navbar />
    </HeaderComponent>
  );
};

export default Header;
