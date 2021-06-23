import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import styled from 'styled-components';


const ContactSection = styled.section`
    display: grid;
    place-content: center;

    ul {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        gap: 2rem;
    }

    svg {
        width: 1.3rem;
        height: 1.3rem;
        color: tomato;
        transition: all 150ms ease-in-out;
    }

    li:hover svg {
        color: ${({theme}) => theme.textColor};
    }


    @media (max-width: 600px) {
        width: 100%;
        h2 {
            text-align: center;
            font-size: 1.3rem;
        }
    }
`

const Contact = () => {
    return (
        <ContactSection>
            <ul>
                <li>
                    <a href="https://github.com/sanjibdey104" rel="noreferrer" target="_blank">
                        <FiGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sanjib-kumar-dey-359984130/" rel="noreferrer" target="_blank">
                        <FiLinkedin />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/Sanjib_104" rel="noreferrer" target="_blank">
                        <FiTwitter />
                    </a>
                </li>
                <li>
                    <a className="mail" href="mailto:sanjibdey.dey4@gmail.com">
                        <FiMail />
                    </a>                
                </li>
            </ul>
        </ContactSection>
    )
}

export default Contact
