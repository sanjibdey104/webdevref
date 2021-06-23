import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {ThemeToggleButton} from './ThemeToggleButton';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content:center;

    @media (max-width: 768px) {
        width: 90%;
        position: fixed;
        padding: 0.2rem 0;
        bottom: 0.5rem;
        z-index: 10;

        border-radius: 1rem;
        background-color: ${({theme}) => theme.mobileNavBg};
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

    a {
        cursor: pointer;
        padding: 0.5rem;
        position: relative;

        &:hover::before, &:hover::after {
            transform: scale(1);
        }

        &::before {
            content: "";
            width: 0.75rem;
            height: 0.75rem;
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            border-left: 2px solid ${({theme}) => theme.textColor};
            border-top: 2px solid ${({theme}) => theme.textColor};
            transform: scale(0);
            transition: transform 150ms ease-in-out;
        }

        &::after {
            content: "";
            width: 0.75rem;
            height: 0.75rem;
            position: absolute;
            right: 0;
            bottom: 0;
            display: block;
            border-right: 2px solid ${({theme}) => theme.textColor};
            border-bottom: 2px solid ${({theme}) => theme.textColor};
            transform: scale(0);
            transition: transform 150ms ease-in-out;
        }
    }

    @media (max-width: 768px) {
        gap: 1.2rem;

        a {
            padding: 0;

            &::before {
                display: none;
            }

            &::after {
                display: none;
            }
        }

        li {
            font-size: 1.2rem;
        }
    }
`

const Navbar = () => {

    return (
        <Nav>
            <NavLinks>
                <Link href="/"><li><a>Home</a></li></Link>
                <Link href="/projects"><li><a>Projects</a></li></Link>
                <Link href="/contact"><li><a>Contact</a></li></Link>
                <li><ThemeToggleButton /></li>
            </NavLinks>
        </Nav>
    )
}


export default Navbar;