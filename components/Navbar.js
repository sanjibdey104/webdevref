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
    }
`

const Navbar = () => {

    return (
        <Nav>
            <NavLinks>
                <Link href="/"><li><a>home</a></li></Link>
                <Link href="/posts"><li><a>posts</a></li></Link>
                <Link href="/topics"><li><a>topics</a></li></Link>
                <Link href="/about"><li><a>about</a></li></Link>
                <ThemeToggleButton />
            </NavLinks>
        </Nav>
    )
}


export default Navbar;