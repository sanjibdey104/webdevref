import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styled from "styled-components";

const ContactSection = styled.section`
  display: grid;
  place-content: center;
  margin-bottom: 1.2rem;

  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.accentColor};
    transition: all 150ms ease-in-out;
  }

  li:hover svg {
    color: ${({ theme }) => theme.fgLight};
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ul>
        <li>
          <a
            href="https://github.com/sanjibdey104"
            rel="noreferrer"
            target="_blank"
            aria-label="Github"
          >
            <FiGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/"
            rel="noreferrer"
            target="_blank"
            aria-label="Linkedin"
          >
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Sanjib_104"
            rel="noreferrer"
            target="_blank"
            aria-label="Twitter"
          >
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="mailto:sanjibdey.dey4@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </li>
      </ul>
    </ContactSection>
  );
};

export default Contact;
