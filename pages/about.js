import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  width: 65%;
  margin: 0 auto;
  margin-bottom: 1rem;

  h2 {
    font-family: var(--font-secondary);
    text-align: center;
    margin-bottom: 2rem;
  }

  .body {
    display: flex;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    width: 100%;

    h2 {
      text-align: center;
      font-size: 1.3rem;
    }
    .body {
      display: flex;
      flex-direction: column;
    }
  }
`;

const About = () => {
  return (
    <AboutSection>
      <h2>motivation behind the blog</h2>

      <div className="body">
        <div className="content">
          <p>
            For a beginner, self-taught web developer the overwhelming aspect of
            the learning curve, even before starting out with actually learning
            the technologies is the huge assortment of technologies to start
            with.
          </p>
          <p>
            Being one such developer myself, I've had my fair share of confusion
            and exhaustion.{" "}
          </p>
          <p>
            So, I started out with documentations and blog posts for a better
            clarity of the topics I was getting exposed to and to maintained a
            reference through chrome bookmarks.
          </p>
          <p>
            Through this blog, I want to share all such resources to the
            community out there.
          </p>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
