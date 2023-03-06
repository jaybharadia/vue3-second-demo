import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { gql } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import VueApolloComponents from "@vue/apollo-components";
import {
  ApolloClients,
  provideApolloClient,
  provideApolloClients,
  useMutation,
} from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api-bii.preview.im/graphql",
});

const publicHttpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api-bii.preview.im/graphql/open",
});
// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const publicApolloClient = new ApolloClient({
  link: publicHttpLink,
  cache,
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  clients: {
    publicApolloClient,
  },
});

// provideApolloClients({
//   default: apolloClient,
//   publicApolloClient,
// });

const install = (app) => {
  app.use(apolloProvider);
  app.use(VueApolloComponents);
  app.provide(ApolloClients, {
    default: apolloClient,
    publicApolloClient,
  });
};

export default install;

export { apolloClient, publicApolloClient };
