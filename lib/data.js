import { gql, GraphQLClient } from "graphql-request";

const endpoint = `${process.env.GRAPHCMS_PROJECT_API_ENDPOINT}`;
const graphQLClient = new GraphQLClient(endpoint, 
    {
        headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
        }
    }
);

export const getPosts= async() => {
    const postsQuery = gql`
    {
        posts {
          id
          title
          slug
          topic
          date
          excerpt
        }
    }
    `
    const postsData = await graphQLClient.request(postsQuery);
    return postsData;
}