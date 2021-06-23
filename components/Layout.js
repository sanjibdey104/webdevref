import React from 'react';
import styled from 'styled-components';

import CustomHead from './CustomHead';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';

const Layout = ({ children }) => {

    return (

        <>
            <CustomHead />
            <div className="container">
                <Header/>
                    {children}
                <Footer/>
            </div>
        </> 
    );
}
export default Layout;