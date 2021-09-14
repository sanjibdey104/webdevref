import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getFeaturedPosts } from "../lib/data";
import PostCard from "../components/PostCard";
import Image from "next/image";
import CustomHead from "../components/CustomHead";

const BlogIntro = styled.section`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.section`
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid ${({ theme }) => theme.accentColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.surfaceElevation};

  p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  span {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.accentColor};
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

  let sortedPosts = posts.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <>
      <CustomHead pageTitle="WebDevRef" />
      <BlogIntro>
        <Image
          src="/jungle-remote-working.png"
          width={320}
          height={200}
          alt="homepage banner"
        />

        <Description>
          <p>
            Welcome to <span>webdevref</span>
          </p>
          <p>A resource reference blog for</p>
          <p>web developers</p>
        </Description>
      </BlogIntro>

      <FeaturePostsSection>
        <h2>featured posts</h2>

        <ul className="post-list">
          {sortedPosts.map((post) => {
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
