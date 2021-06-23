import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const PostCardComponent = styled.li`

    width: clamp(22rem, 20vw, 25rem);
    height: 12rem;
    cursor: pointer;

    border-radius: 0.5rem;
    padding: 0.5rem;
    border-left: 3px solid ${({theme}) => theme.accentColor};
    box-shadow: ${({theme}) => theme.boxShadow};
    
    align-self: center;
    justify-self: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    position: relative;
    overflow: hidden;

    &:hover{
        .card-footer {
            .read-more-link{
                transform: translateY(0);
            }
        }
    }
    
    .card-header {
        .title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        .date {
            font-size: 0.75rem;
            color: ${({theme}) => theme.accentColor};
        }
    }

    .card-body {
        .excerpt {
            width: 100%;
            font-size: 0.85rem;
        }
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .topic, .read-more-link {
            font-size: 0.85rem;
            font-weight: 500;
            color: ${({theme}) => theme.accentColor};
        }
        .read-more-link {
            margin-left: auto;
            transform: translateY(2rem);
            transition: transform 150ms ease-in-out;

            @media (max-width: 600px) {
                color: $accent-color-secondary;
                transform: translateY(0);
            }
        }
    }
`

const PostCard = ({title, slug, date, excerpt, topic}) => {
    return (
        <Link href={`/posts/${slug}`}>
            <PostCardComponent>
                <div className="card-header">
                    <h3 className="title">{title}</h3>
                    <p className="date">{date}</p>
                </div>

                <div className="card-body">
                    <p className="excerpt">{excerpt}</p>
                </div>

                <div className="card-footer">              
                    <p className="topic">#{topic}</p>
                    <p className="read-more-link">Read More...</p>
                </div>
            </PostCardComponent>
        </Link>
    );
}
 
export default PostCard;