import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const PostCardComponent = styled(motion.li)`
  width: clamp(22rem, 20vw, 25rem);
  height: 12rem;
  cursor: pointer;
  position: relative;

  border-radius: 0.5rem;
  border-top-left-radius: initial;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  position: relative;

  &:hover {
    .card-footer {
      .read-more-link {
        transform: translateY(0);
      }
    }
  }

  .card-header {
    .title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-family: var(--font-secondary);
      color: ${({ theme }) => theme.lgText};
    }
    .date {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.lightText};
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

    .read-more-link {
      font-size: 0.85rem;
      font-weight: 500;
      color: ${({ theme }) => theme.accentColor};
    }
    .read-more-link {
      margin-left: auto;
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
`;

const PostCard = ({ index, title, slug, date, excerpt, topic }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <PostCardComponent
        variants={{
          hidden: { y: 50 },
          visible: (index) => ({ y: 0, transition: { delay: index * 0.05 } }),
        }}
        initial="hidden"
        animate="visible"
        custom={index}
      >
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
          <p className="read-more-link">Read More...</p>
        </div>
      </PostCardComponent>
    </Link>
  );
};

export default PostCard;
