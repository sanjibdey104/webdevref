import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getFeaturedPosts } from '../lib/data';
import PostCard from '../components/PostCard';


const BlogIntro = styled(motion.section)`
  height: 30rem;
  margin-bottom: 2rem;
  
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

const FeaturePostsSection = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    h2 {
      text-align: center;
      font-size: 1.3rem;
    }
  }
`

const Home = ({featuredPostsData}) => {

  const {posts} = featuredPostsData;

  return (
    <>
    <BlogIntro initial={{y:50}} animate={{y:0}}>
      <Description>
        <h2>Welcome to <span>Web Dev Ref</span></h2>
        <h2>A resource reference blog for</h2>
        <h2>web developers</h2>
      </Description>       
    </BlogIntro>

    <FeaturePostsSection>
      <h2>featured posts</h2>

      <ul className="post-list">
        {posts.map(post => {
          const { id } = post;
          return <PostCard key={id} {...post}/>
        })}     
      </ul>
    </FeaturePostsSection>

    <Link href="/posts">
      <a className="all-posts-link">Go to all posts...</a>
    </Link>
    </>
  );
}

export const getStaticProps = async() => {
  const featuredPostsData = await getFeaturedPosts();

  return {
    props: {
      featuredPostsData
    }
  }
}

 
export default Home;