import React, { useState } from "react";
import styled from "styled-components";
import PostCard from "../components/PostCard";
import { getPosts } from "../lib/data";
import { FiSearch } from "react-icons/fi";

const AllPostsSection = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h2 {
    color: ${({ theme }) => theme.fgBold};
    font-family: var(--font-secondary);
  }

  .post-search {
    margin-bottom: 4rem;
    width: clamp(20rem, 30vw, 25rem);
    position: relative;

    .search-bar {
      width: 100%;
      height: 2.3rem;
      border: 0;
      outline: 0;
      border-radius: 5rem;
      padding: 0.2rem 1rem;

      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.fgLight};
      background-color: ${({ theme }) => theme.surfaceElevation};
      border-left: 3px solid ${({ theme }) => theme.accentColor};
      box-shadow: ${({ theme }) => theme.boxShadow};
    }

    .search-icon {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: ${({ theme }) => theme.accentColor};
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    h2 {
      text-align: center;
      font-size: 1.3rem;
    }
  }
`;

const Posts = (props) => {
  const { postsData } = props;
  const { posts } = postsData;
  const [searchValue, setSearchValue] = useState("");

  let filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <AllPostsSection>
      <h2>all posts</h2>

      <div className="post-search">
        <input
          type="text"
          className="search-bar"
          placeholder="search for a post..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-icon">
          <FiSearch />
        </button>
      </div>

      <ul className="post-list">
        {!filteredPosts.length
          ? "No Posts found"
          : filteredPosts.map((post, index) => {
              const { id } = post;
              return <PostCard index={index} key={id} {...post} />;
            })}
      </ul>
    </AllPostsSection>
  );
};

export const getStaticProps = async () => {
  const postsData = await getPosts();

  return {
    props: {
      postsData,
    },
  };
};

export default Posts;
