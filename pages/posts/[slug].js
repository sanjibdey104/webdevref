import React, { useEffect } from "react"
import Link from 'next/link';
import styled from 'styled-components';
import { getPost, getPostSlugs } from '../../lib/data';
import {ScrollHandlerLogic} from '../../components/ScrollHandler';

import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import CustomLink from '../../components/CustomLink';
import {motion} from 'framer-motion';


const SinglePostSection = styled(motion.section)`
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
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    margin: 1rem 0;
    
    &:hover svg {
      transform: scale(1.2);
    }
    
    svg {
      display: inline;
      color: ${({theme}) => theme.accentColor};
      
      margin-right: 1rem;
      font-size: 1.2rem;
      transform: scale(1);
      transition: transform 150ms ease-in-out;
    }
  }

  pre {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #011627;
    background-color: ${({theme}) => theme.backgroundColor};
    box-shadow: ${({theme})=> theme.boxShadow};
    color: ${({theme}) => theme.accentColor};
    margin: 1rem 0;
    font-size: 0.85rem;
    font-weight: 500;
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

  const [scrollIndicatorWidth, handleScroll] = ScrollHandlerLogic();

  useEffect(() => {  
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const post = postData[0];
  const {title, date, topic, content} = post;

  const htmlContent = unified().use(parse).use(remark2react, {
      remarkReactComponents: {
          a: CustomLink,
      },
  }).processSync(content).result;


  return (
    <>
    <div className="scroll-tracker" style={{width: `${scrollIndicatorWidth}%`}} />

    <SinglePostSection initial={{y:50}} animate={{y:0}}>
      <PostHeader>
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <p className="topic">#{topic}</p>
      </PostHeader>

      <PostBody>
      {htmlContent}
      </PostBody>
    </SinglePostSection>
    
    <Link href="/posts">
      <a className="all-posts-link">Go to all posts...</a>
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