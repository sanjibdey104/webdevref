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
  gap: 0.3rem;

  #illustration-attr {
    display: flex;
    gap: 0.3rem;
    margin-bottom: 0.2rem;
  }

  a {
    color: ${({ theme }) => theme.accentColor};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.fgBold};
    }
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <Contact />

      <p>&copy; 2021 WebDevRef.</p>

      <p id="dev-attr">
        Powered by:{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        ,{" "}
        <a href="https://graphcms.com/" target="_blank" rel="noreferrer">
          GraphCMS
        </a>
        ,{" "}
        <a href="https://vercel.com/" target="_blank" rel="noreferrer">
          Vercel
        </a>
      </p>

      <p id="illustration-attr">
        Illustration by{" "}
        <a
          href="https://icons8.com/illustrations/author/60d4adbbe806b31fbdccd19c"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giulia Maidecchi
        </a>{" "}
        from{" "}
        <a
          href="https://icons8.com/illustrations"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ouch!
        </a>
      </p>
    </FooterComponent>
  );
};

export default Footer;
