import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { NavbarDisplayContext } from "../../context/NavbarDisplayContext";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 90%;
    position: fixed;
    padding: 0.65rem 0;
    bottom: 0.5rem;
    z-index: 10;

    border-radius: 2rem;
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.mobileNavLink};

    transform: translateY(120%);
    transition: transform 200ms ease-in-out;

    &#open {
      transform: translateY(0);
    }
  }
`;

const NavLinks = styled.ul`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  li {
    position: relative;
    font-weight: 500;
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.accentColor};

      svg {
        color: ${({ theme }) => theme.accentColor};
      }
    }

    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;

const NavToggleButton = styled.button`
  display: none;

  span {
    width: 60%;
    height: 2px;
    background-color: ${({ theme }) => theme.mobileNavLink};
    margin: 0;
    padding: 0;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    right: 0;
    background: inherit;
    box-shadow: inherit;
    height: 2.75rem;
    width: 2.75rem;
    border-radius: 50%;

    transform: translateY(-110%) translateX(35%);
  }
`;

const Navbar = () => {
  const { navDisplay, toggleNavDisplay } = useContext(NavbarDisplayContext);

  return (
    <Nav id={navDisplay ? "open" : ""}>
      <NavLinks>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>posts</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li id="theme-toogle-btn">
          <ThemeToggleButton />
        </li>
      </NavLinks>

      <NavToggleButton onClick={() => toggleNavDisplay()}>
        <span></span>
        <span></span>
        <span></span>
      </NavToggleButton>
    </Nav>
  );
};

export default Navbar;
