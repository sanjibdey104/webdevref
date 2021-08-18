import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const HeaderComponent = styled.header`
  width: 90%;
  height: 4rem;
  padding: 0.5rem 0;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 100%;
  }

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
