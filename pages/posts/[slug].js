import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPost, getPostSlugs } from "../../lib/data";
import { ScrollHandlerLogic } from "../../components/ScrollHandler";
import { motion } from "framer-motion";

import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock";
import CustomLink from "../../components/CustomLink";
import "highlight.js/styles/atom-one-dark-reasonable.css";

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
`;

const PostHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  padding-bottom: 0.5rem;

  .title {
    margin-bottom: 1rem;
  }

  .date,
  .topic,
  .last-updated {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.accentColor};
  }
`;

const PostBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.6;

  a {
    position: relative;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    border: 1px solid #3dffc5;
  }

  pre {
    overflow-x: auto;
    overflow-y: hidden;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    /* code {
      padding: 0.85rem;
    } */
    code,
    span {
      font-family: "Consolas", "Source Code Pro", monospace;
    }
  }

  blockquote {
    min-height: 3rem;
    padding-left: 1rem;
    margin: 1rem 0;
    border-left: 5px solid ${({ theme }) => theme.accentColor};

    font-style: italic;
    display: flex;
    align-items: center;
  }

  ul {
    list-style-type: disc;
    padding: 0 1rem;
  }
`;

const PostTemplate = ({ postData }) => {
  const [scrollIndicatorWidth, handleScroll] = ScrollHandlerLogic();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = postData[0];
  const { title, date, topic, content } = post;

  const fetchedDate = new Date(date);
  const formattedDate = fetchedDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div
        className="scroll-tracker"
        style={{ width: `${scrollIndicatorWidth}%` }}
      />

      <SinglePostSection initial={{ y: 50 }} animate={{ y: 0 }}>
        <PostHeader>
          <h2 className="title">{title}</h2>
          <p className="date">{formattedDate}</p>
          <p className="topic">#{topic}</p>
        </PostHeader>

        <PostBody>
          <ReactMarkdown
            children={content}
            components={{ a: CustomLink, code: CodeBlock }}
          />
        </PostBody>
      </SinglePostSection>

      <Link href="/posts">
        <a className="all-posts-link">Go to all posts...</a>
      </Link>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPost(params.slug);

  return {
    props: {
      postData: data.posts,
    },
  };
};

export default PostTemplate;

export async function getStaticPaths() {
  const posts = await getPostSlugs();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
