import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import { SiNextDotJs } from 'react-icons/si';

const FooterComponent = styled.footer`
    width: 100%;
    font-size: 0.75rem;
    padding: 0.75rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    
    p {
        display: flex;
        align-items: center;

        svg {
            display: inline;
            font-size: 1.2rem;
            margin-left: 0.3rem;
            align-self: center;
        }
    }
`

const Footer = () => {
    return (
        <FooterComponent>
            <Contact />
            <p>&copy; 2021 WebDevRef. &nbsp; Built with <SiNextDotJs />extJS</p>
        </FooterComponent>
    );
}
 
export default Footer;