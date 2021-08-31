import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }

  h2 {
    font-family: var(--font-secondary);
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  blockquote {
    margin: 2rem 0;
    padding: 0.85rem;
    border-left: 5px solid ${({ theme }) => theme.accentColor};
    background-color: ${({ theme }) => theme.accentColorLighter};
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h2>motivation behind the blog</h2>

      <div className="about">
        <p>
          For a beginner, self-taught web developer the overwhelming aspect of
          the learning curve is the huge assortment of technologies to start
          with. Being one such developer myself, I've had my fair share of
          eagerness and confusion. But, that is part of the process.
        </p>
        <blockquote>
          Learning by sharing is the gospel of honest growth.
        </blockquote>
        <p>
          The goal was to have a space to help keep track of my learnings,
          document it and maybe help others white I'm at it.
        </p>
        <p>
          Building the blog from scratch, not only taught me about new tech and
          tools, but serves as as decent side project, plus as an added bonus,
          logging and revisiting self drafted posts serves as a sweet revision
          tactic as well - to brush up and retain concepts.
        </p>
        <p>
          This is my token of contribution to the developer community out there.
        </p>
      </div>
    </AboutSection>
  );
};

export default About;
