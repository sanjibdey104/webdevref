import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;

    display: grid;
    place-content: center;

    width: 4.4rem;
    height: 4.4rem;
    background-color: var(--logo-color);
    color: black;
    padding: 0.5rem;

    box-shadow: 0 0 5px rgba(0,0,0,0.3);
`

const Logo = () => {
    return (
        <StyledLogo>
            <span className="span-one">&lt; Web</span>
            <span className="span-two">Dev</span>
            <span className="span-three">Ref /&gt;</span>
        </StyledLogo>
    );
}
 
export default Logo;