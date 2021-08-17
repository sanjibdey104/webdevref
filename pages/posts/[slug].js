import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPost, getPostSlugs } from "../../lib/data";
import { ScrollHandlerLogic } from "../../components/post/ScrollHandler";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import CustomLink from "../../components/post/CustomLink";
import CodeBlock from "../../components/post/CodeBlock";

const SinglePostSection = styled(motion.section)`
  width: 65%;
  margin: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

const PostHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  padding-bottom: 0.5rem;

  .title {
    color: ${({ theme }) => theme.lgText};
    font-family: var(--font-secondary);
    margin-bottom: 1rem;
    font-size: 2.2rem;
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
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.6;

  a {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    color: ${({ theme }) => theme.accentColor};

    font-size: 1.1rem;
    font-weight: 500;

    &:hover svg {
      transform: scale(1.2);
    }

    svg {
      display: inline;
      font-size: 1.4rem;
      transform: scale(1);
      transition: transform 150ms ease-in-out;
    }
  }

  pre {
    div {
      overflow-x: scroll;
      border-radius: 0.5rem;
      padding: 0.85rem;
      background-color: "#2b2d42";
      span {
        font-size: 0.9rem;
        font-family: monospace;
      }
    }
  }

  blockquote {
    min-height: 3rem;
    padding-left: 1rem;
    margin: 1rem 0;
    border-left: 5px solid ${({ theme }) => theme.accentColor};
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
            components={{
              a: CustomLink,
              code: CodeBlock,
            }}
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
