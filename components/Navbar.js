import React, { useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {ThemeToggleButton} from './ThemeToggleButton';
import { NavbarDisplayContext } from '../context/NavbarDisplayContext';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content:center;

    @media (max-width: 600px) {
        width: 90%;
        position: fixed;
        padding: 0.65rem 0;
        bottom: 0.5rem;
        z-index: 10;

        border-radius: 1rem;
        background-color: ${({theme}) => theme.accentColor};
        color: ${({ theme }) => theme.mobileNavLink};

        transform: translateY(120%);
        transition: transform 200ms ease-in-out;

        &#open {
            transform: translateY(0);
        }
    }
`

const NavLinks = styled.ul`
    width: 100%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2rem;

    li {
        font-size: 1rem;
        position: relative;
        font-weight: 500;
        cursor: pointer;

        &::before {
            content: "/";
            display: inline-block;

            width: 5px;
            color: ${({theme}) => theme.accentColor};

            margin-right: 0.2rem;
            transform: scale(0);
            transition: transform 150ms ease-in-out;
        }
    
        &:hover::before {
            transform: scale(1.5);
        }


        @media (max-width: 600px) {
            font-size: 1.1rem;

            &::before {
                display: inline;
                transform: scale(1);
                color: ${({theme}) => theme.mobileNavLink};
            }
        }
    }
`

const NavToggleButton = styled.button`
    display: none;

    span {
        width: 60%;
        height: 2px;
        background-color: ${({theme}) => theme.mobileNavLink};
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
`

const Navbar = () => {

    const {navDisplay, toggleNavDisplay} = useContext(NavbarDisplayContext);

    return (
        <Nav id={navDisplay ? 'open' : ''}>
            <NavLinks>
                <Link href="/"><li><a>home</a></li></Link>
                <Link href="/posts"><li><a>posts</a></li></Link>
                <Link href="/about"><li><a>about</a></li></Link>
                <ThemeToggleButton />
            </NavLinks>

            <NavToggleButton onClick={() => toggleNavDisplay()}>
                <span></span>
                <span></span>
                <span></span>
            </NavToggleButton>
        </Nav>
    )
}


export default Navbar;