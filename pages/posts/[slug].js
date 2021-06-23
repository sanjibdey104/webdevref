import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { getPost, getPostSlugs } from '../../lib/data';

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';

const SinglePostSection = styled.section`
  width: 70%;
  margin: 3rem auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`

const PostHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  padding-bottom: 0.5rem;

  .title {
    margin-bottom: 1rem;
  }

  .date, .topic, .last-updated {
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme}) => theme.accentColor};
  }
`

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.6;

  a {
    position: relative;
    margin-bottom: 3rem;
    font-size: 1.1rem;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;

      width: 100%;
      height: 30%;

      z-index: -10;
      opacity: 0.5;
      background-color: ${({theme}) => theme.accentColor};
      transition: height 150ms ease-in-out;
    }

    &:hover::after {
      height: 100%;
    }
  }

  pre {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #011627;
    color: #03dac6;
    margin: 1rem 0;
  }
      
  blockquote {
    min-height: 3rem;
    padding-left: 1rem;
    margin: 1rem 0;
    border-left: 5px solid ${({theme}) => theme.accentColor};

    font-style: italic;
    display: flex;
    align-items: center;
  }

  ul {
    list-style-type: disc;
    padding: 0 1rem;
  }

`

const PostTemplate = ({postData}) => {

    const post = postData[0];
    const {title, date, topic, content} = post;
    const html = unified()
    .use(parse)
    .use(remark2react)
    .processSync(content).result;

    return (
        <>
        <SinglePostSection>
            <PostHeader>
                <h2 className="title">{title}</h2>
                <p className="date">{date}</p>
                <p className="topic">#{topic}</p>
            </PostHeader>

            <PostBody>
            {html}
            </PostBody>
        </SinglePostSection>
        
        <Link href="/posts" className="all-posts-link">
        Go to all posts...
        </Link>
        </>        
    );
}

export const getStaticProps = async({params}) => {
    const data = await getPost(params.slug);

    return {
        props: {
            postData: data.posts
        }
    }
}
 
export default PostTemplate;


export async function getStaticPaths() {
    const posts = await getPostSlugs();

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    }
}