import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLogo = styled.div`
  display: grid;
  place-content: center;
  cursor: pointer;

  width: 4.4rem;
  height: 4.4rem;
  padding: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  color: black;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: var(--logo-color);
`;

const Logo = () => {
  return (
    <Link href="/">
      <a aria-label="logo">
        <StyledLogo>
          <span>&lt; Web</span>
          <span>Dev</span>
          <span>Ref /&gt;</span>
        </StyledLogo>
      </a>
    </Link>
  );
};

export default Logo;
