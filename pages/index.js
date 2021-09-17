import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getFeaturedPosts } from "../lib/data";
import PostCard from "../components/PostCard";
import CustomHead from "../components/CustomHead";

const BlogIntro = styled.section`
  width: 100%;
  margin: 0 auto;
  min-height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro {
    font-size: clamp(2.85rem, 4vw, 4rem);

    .foreground {
      background-image: linear-gradient(92deg, #f35626, #feab3a);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: hueFade 20s linear infinite;

      @keyframes hueFade {
        from {
          -webkit-filter: hue-rotate(0deg);
        }
        to {
          -webkit-filter: hue-rotate(-360deg);
        }
      }
    }
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
    font-size: 1.75rem;
    font-family: var(--font-secondary);
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
        <div className="intro">
          <p>Welcome to WebDevRef</p>
          <p>My blog space to:</p>
          <h2 className="foreground">Learn. Share. Grow.</h2>
        </div>
      </BlogIntro>

      <FeaturePostsSection>
        <h2>featured posts 👇</h2>

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
