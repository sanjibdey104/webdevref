import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getPost, getPostSlugs } from "../../lib/data";
import ReactMarkdown from "react-markdown";
import CustomLink from "../../components/postPage/CustomLink";
import CodeBlock from "../../components/postPage/CodeBlock";
import calcEstimatedReadTime from "../../utils/readTime";
import { FaClock } from "react-icons/fa";
import CustomHead from "../../components/CustomHead";
import Seo from "../../components/Seo";
import Comments from "../../components/Comments";
import { ScrollHandlerLogic } from "../../components/postPage/ScrollHandler";

const SinglePostSection = styled.section`
  width: 70%;
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
    color: ${({ theme }) => theme.fgBold};
    font-family: var(--font-secondary);
    margin-bottom: 1rem;
    font-size: 2.5rem;
  }

  section {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ theme }) => theme.fgLighter};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;

    div {
      display: flex;
      gap: 1rem;

      .read-time {
        display: flex;
        gap: 0.3rem;
        align-items: center;
        color: ${({ theme }) => theme.accentColor};
      }
    }
  }
`;

const PostBanner = styled.div`
  img {
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 0.5rem;
    width: 100%;
  }

  #banner-attribution {
    margin-top: 0.5rem;
    text-align: right;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.fgLighter};
  }
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  line-height: 1.6;

  h2,
  h3 {
    margin-top: 1.2rem;
  }

  a {
    font-weight: 500;
    color: ${({ theme }) => theme.accentColor};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
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
    margin: 1rem 0;
    padding: 0.85rem;
    font-style: italic;
    border-left: 5px solid ${({ theme }) => theme.accentColor};
    background: ${({ theme }) => theme.accentColorLighter};
  }

  ul {
    list-style-type: disc;
  }

  img {
    max-width: 100%;
  }
`;

const PostTemplate = ({ postData }) => {
  const [scrollIndicatorWidth, handleScroll] = ScrollHandlerLogic();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = postData[0];
  const { title, date, topic, content, updatedAt } = post;
  const { banner = {} } = post;

  const estimatedReadTime = calcEstimatedReadTime(content.concat("", title));

  const createdOnDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const lastUpdatedOnDate = new Date(updatedAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <CustomHead pageTitle={title} />
      <Seo postData={post} />
      <div
        className="scroll-tracker"
        style={{ width: `${scrollIndicatorWidth}%` }}
      />

      <SinglePostSection>
        <PostHeader>
          <h1 className="title">{title}</h1>
          <section>
            <div>
              <p className="created-on">{createdOnDate}</p>
              <p className="topic">#{topic}</p>
              <p className="read-time">
                <FaClock />
                {estimatedReadTime} min read
              </p>
            </div>
            <p className="last-updated">last updated: {lastUpdatedOnDate}</p>
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

      <Comments />

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
