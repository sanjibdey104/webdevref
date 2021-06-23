import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PostCard from '../components/PostCard';
import { getPosts } from '../lib/data';

const AllPostsSection = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;

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

const Posts = ({ postsData }) => {

    const {posts} = postsData;

    return (
        <AllPostsSection>
            <h2>all the posts</h2>

            <ul className="post-list">
                {posts.map(post => {
                const { id } = post;
                return <PostCard key={id} {...post}/>
                })}     
            </ul>
        </AllPostsSection>
    );
}

export const getStaticProps = async() => {
    const postsData = await getPosts();

    return {
        props: {
            postsData
        }
    }
}
 
export default Posts;
