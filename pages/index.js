import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


const BlogIntro = styled.section`
  height: 30rem;
  margin-bottom: 1rem;
  
  display: grid;
  place-content: center;

  @media (max-width: 600px) {
    height: 15rem;
    flex-direction: column-reverse;
    font-size: 0.8rem;
    margin-bottom: 5rem;
  }
`

const Description = styled.section`
  padding: 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  position: relative;

  border-left: 3px solid ${({theme}) => theme.accentColor};
  box-shadow: ${({theme}) => theme.boxShadow};

  @media (max-width: 600px) {
    padding: 1rem;
    span {
      font-size: 1.5rem;
      display: block;
    }
  }

  h2 {
      font-weight: 500;
  }

  span {
      font-size: 2rem;
      font-weight: 700;
  }
`

const Home = () => {

  return (
    <>
    <BlogIntro>
      <Description>
        <h2>Welcome to <span>Web Dev Ref</span> </h2>
        <h2>A resource reference blog for</h2>
        <h2>web developers</h2>
      </Description>       
    </BlogIntro>

    <Link href="/posts" className="all-posts-link">
      Go to all posts...
    </Link>
    </>
  );
}
 
export default Home;