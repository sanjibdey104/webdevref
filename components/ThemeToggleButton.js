import React, { useContext } from 'react'
import styled from 'styled-components'
import { FiSun, FiMoon } from "react-icons/fi"
import { ThemeContext } from '../context/ThemeContext'

const ThemeSwitch = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${({ theme }) => theme.textColor};
    }
`

export const ThemeToggleButton = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <ThemeSwitch onClick={toggleTheme}>
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </ThemeSwitch>
    )
}
