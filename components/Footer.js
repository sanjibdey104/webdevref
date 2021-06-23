import React from 'react';
import styled from 'styled-components';

const FooterComponent = styled.footer`
    width: 100%;
    font-size: 0.65rem;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

const Footer = () => {
    return (
        <FooterComponent>
            <p>&copy; 2021 Sanjib Kumar Dey. Built with</p>
            <p>Gatbsy</p>
        </FooterComponent>
    );
}
 
export default Footer;