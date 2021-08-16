import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import { SiNextDotJs } from "react-icons/si";

const FooterComponent = styled.footer`
  width: 100%;
  font-size: 0.65rem;
  padding: 0.75rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    display: flex;
    align-items: center;

    svg {
      display: inline;
      font-size: 1.1rem;
      margin-left: 0.3rem;
      align-self: center;
    }
  }
`;

const Attribution = styled.section`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 0.2rem;

  a {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <Contact />

      <Attribution>
        Illustration by{" "}
        <a
          href="https://icons8.com/illustrations/author/5f32934501d0360017af905d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Polina Golubeva
        </a>{" "}
        from{" "}
        <a
          href="https://icons8.com/illustrations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouch!
        </a>
      </Attribution>

      <p>
        &copy; 2021 WebDevRef. &nbsp; Built with <SiNextDotJs />
        extJS
      </p>
    </FooterComponent>
  );
};

export default Footer;
