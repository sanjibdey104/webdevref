import React from "react";
import styled from "styled-components";
import Link from "next/link";
import calcEstimatedReadTime from "../utils/readTime";
import { FaClock } from "react-icons/fa";

const PostCardComponent = styled.li`
  width: clamp(22rem, 25vw, 25rem);
  height: 13rem;
  cursor: pointer;
  position: relative;

  /* ----------------------------------------- */
  border-radius: 0.5rem;
  border-top-left-radius: initial;
  padding: 0.5rem;
  border-right: 3px solid ${({ theme }) => theme.accentColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.surfaceElevation};
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  /* ---------------------------------------- */

  &:hover {
    .card-header .title {
      color: ${({ theme }) => theme.accentColor};
    }
    .card-footer .read-more-link {
      transform: translateY(0);
    }
    .topic {
      transform: translateY(0);
      opacity: 0;
    }
  }

  .card-header {
    .title {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      font-family: var(--font-secondary);
      color: ${({ theme }) => theme.fgBold};
    }
    .date {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.fgLighter};
    }
  }

  .card-body {
    .excerpt {
      font-size: 0.85rem;
    }
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    .read-more-link {
      font-size: 0.85rem;
      font-weight: 500;
      color: ${({ theme }) => theme.accentColor};
      margin-left: auto;
      transform: translateY(100%);
      transition: transform 200ms ease-in-out;
      @media screen and (max-width: 768px) {
        transform: translateY(0);
      }
    }
    .read-time {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.fgLighter};
    }
  }

  .topic {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    padding: 0.3rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    color: #000;
    font-size: 0.75rem;
    font-weight: 500;
    width: 5rem;
    text-align: center;
    z-index: -1;
    transition: all 200ms ease-in-out;
  }

  #javascript {
    background-color: var(--js-theme);
  }
  #css {
    background-color: var(--css-theme);
  }
  #react {
    background-color: var(--react-theme);
  }
  #nextjs {
    background-color: var(--nextjs-theme);
  }
  #offtech {
    background-color: var(--offtech-theme);
  }
`;

const PostCard = (props) => {
  const { title, slug, date, excerpt, topic, content } = props;
  const stringToRead = content.concat(" ", title);
  const estimatedReadTime = calcEstimatedReadTime(stringToRead);

  return (
    <Link href={`/posts/${slug}`}>
      <a aria-label="individual post link">
        <PostCardComponent>
          <div className="card-header">
            <h3 className="title">{title}</h3>
            <p className="date">{date}</p>
          </div>

          <div className="card-body">
            <p className="excerpt">{excerpt}</p>
          </div>

          <div className="card-footer">
            <p className="topic" id={topic}>
              #{topic}
            </p>
            <p className="read-time">
              <FaClock />
              {estimatedReadTime} min read
            </p>
            <p className="read-more-link">Read More...</p>
          </div>
        </PostCardComponent>
      </a>
    </Link>
  );
};

export default PostCard;
