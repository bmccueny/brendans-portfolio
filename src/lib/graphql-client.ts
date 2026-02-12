import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "http://localhost:4000/graphql";

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    ...(process.env.GRAPHQL_AUTH_TOKEN && {
      Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
    }),
  },
});
