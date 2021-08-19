import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPost, getPostSlugs } from "../../lib/data";
import { ScrollHandlerLogic } from "../../components/post/ScrollHandler";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import CustomLink from "../../components/post/CustomLink";
import CodeBlock from "../../components/post/CodeBlock";
import calcEstimatedReadTime from "../../utils/readTime";
import { FaClock } from "react-icons/fa";

const SinglePostSection = styled(motion.section)`
  width: 65%;
  margin: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;

  & > * {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

const PostHeader = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 0.5rem;

  .title {
    color: ${({ theme }) => theme.lgText};
    font-family: var(--font-secondary);
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  section {
    font-size: 0.85rem;
    font-weight: 500;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--light-text);
  }

  .read-time {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
`;

const PostBanner = styled.div`
  img {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    width: 100%;
  }

  #banner-attribution {
    margin-top: 0.5rem;
    text-align: right;
    font-size: 0.75rem;
    color: var(--light-text);
  }
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  line-height: 1.6;

  a {
    width: fit-content;
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.accentColor};
    border-bottom: 2px solid;
  }

  pre {
    div {
      overflow-x: scroll;
      border-radius: 0.5rem;
      padding: 0.85rem;
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
    display: flex;
    align-items: center;
    font-style: italic;
    border-left: 5px solid ${({ theme }) => theme.accentColor};
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
  const { banner = {} } = post;

  const estimatedReadTime = calcEstimatedReadTime(content.concat("", title));

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
          <h1 className="title">{title}</h1>
          <section>
            <p className="date">{formattedDate}</p>
            <p className="topic">#{topic}</p>
            <p className="read-time">
              <FaClock />
              {estimatedReadTime} min read
            </p>
          </section>
        </PostHeader>

        {banner ? (
          <PostBanner>
            <img src={banner.url} alt="post banner" />
            <div id="banner-attribution">
              <a href="canva.com" target="_blank" rel="noreferrer">
                self-designed on canva.com
              </a>
            </div>
          </PostBanner>
        ) : null}

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
