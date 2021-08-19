import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getFeaturedPosts } from "../lib/data";
import PostCard from "../components/PostCard";
import Image from "next/image";

const BlogIntro = styled(motion.section)`
  height: 30rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroImage = styled(motion.div)`
  width: clamp(20rem, 22vw, 25rem);
`;

const Description = styled.section`
  padding: 1rem;
  border-radius: 0.5rem;

  font-size: 0.9rem;
  transform: translateY(-10%);

  background-color: ${({ theme }) => theme.backgroundColor};
  border-left: 3px solid ${({ theme }) => theme.accentColor};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: 600px) {
    span {
      display: block;
    }
  }

  h2 {
    font-weight: 500;
  }

  span {
    font-size: clamp(1.5rem, 8vw, 2rem);
    font-weight: 700;
    color: ${({ theme }) => theme.lgText};
  }
`;

const FeaturePostsSection = styled.section`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  h2 {
    font-size: 1.5rem;
  }

  .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
`;

const Home = ({ featuredPostsData }) => {
  const { posts } = featuredPostsData;

  return (
    <>
      <BlogIntro>
        <HeroImage
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Image
            src="/dizzy-education.png"
            width={450}
            height={255}
            alt="flamenco hero image"
          />
        </HeroImage>

        <Description>
          <h2>
            Welcome to <span>Web Dev Ref</span>
          </h2>
          <h2>A resource reference blog for</h2>
          <h2>web developers</h2>
        </Description>
      </BlogIntro>

      <FeaturePostsSection>
        <h2>featured posts</h2>

        <ul className="post-list">
          {posts.map((post) => {
            const { id } = post;
            return <PostCard key={id} {...post} />;
          })}
        </ul>
      </FeaturePostsSection>

      <Link href="/posts">
        <a className="all-posts-link">Go to all posts...</a>
      </Link>
    </>
  );
};

export const getStaticProps = async () => {
  const featuredPostsData = await getFeaturedPosts();

  return {
    props: {
      featuredPostsData,
    },
  };
};

export default Home;
