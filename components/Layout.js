import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';


const LayoutComponent = styled.div`
    width: 75%;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;

    @media (max-width: 600px) {
        width: 90%;
        margin: 0 auto;
    }
`

const Content = styled.main`
    width: 100%;
    padding: 1rem 0; 
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`

const Layout = ({ children }) => {

    return (

        <LayoutComponent>
            <Header/>
            <Content>
                {children}
            </Content>
            <Contact />
            <Footer/>
        </LayoutComponent>
    );
}
export default Layout;