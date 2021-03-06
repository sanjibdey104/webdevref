import { gql, GraphQLClient } from "graphql-request";

const endpoint = `${process.env.GRAPHCMS_PROJECT_API_ENDPOINT}`;
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
  },
});

export const getPosts = async () => {
  const postsQuery = gql`
    {
      posts {
        id
        title
        slug
        topic
        date
        excerpt
        content
      }
    }
  `;
  const postsData = await graphQLClient.request(postsQuery);
  return postsData;
};

export const getPost = async (slug) => {
  const postQuery = gql`
    query PostsBySlug($slug: String) {
      posts(where: { slug: $slug }) {
        id
        title
        slug
        topic
        date
        excerpt
        content
        banner {
          url
        }
        updatedAt
      }
    }
  `;

  const variables = {
    slug,
  };

  const postData = await graphQLClient.request(postQuery, variables);
  return postData;
};

export const getPostSlugs = async () => {
  const slugQuery = gql`
    {
      posts {
        slug
      }
    }
  `;
  const slugData = await graphQLClient.request(slugQuery);
  return slugData.posts;
};
