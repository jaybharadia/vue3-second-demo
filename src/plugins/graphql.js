import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

import { createApolloProvider } from "@vue/apollo-option";
import VueApolloComponents from "@vue/apollo-components";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api-bii.preview.im/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const install = (app) => {
  app.use(apolloProvider);
  app.use(VueApolloComponents);
};

export default install;
