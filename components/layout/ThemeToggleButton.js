import React, { useContext } from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitch = styled.button`
  border: 0;
  display: block;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.fgLight};

    @media (max-width: 600px) {
      color: ${({ theme }) => theme.mobileNavLink};
    }
  }
`;

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeSwitch onClick={toggleTheme} aria-label="Theme Toggle Button">
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </ThemeSwitch>
  );
};
