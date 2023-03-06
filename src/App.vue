<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <h3 class="text-cyan-500 font-mono text-xl">TAILWIND APPLIED</h3>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <ApolloMutation
        :mutation="
          (gql) => gql`
            mutation DoStuff($name: String!) {
              someWork(name: $name) {
                success
                timeSpent
              }
            }
          `
        "
        :variables="{
          name,
        }"
        @done="onDone"
      >
        <template v-slot="{ mutate, loading, error }">
          <button :disabled="loading" @click="mutate()">Click me</button>
          <p v-if="error">An error occurred: {{ error }}</p>
        </template>
      </ApolloMutation>

      <button @click="mutate()">VUE APOLLO COMPOSABLE</button>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
// import { provide } from "vue";
// import { ApolloClients } from "@vue/apollo-composable";
import { apolloClient, publicApolloClient } from "@/plugins/graphql";
console.log("inside app vue -->", apolloClient, publicApolloClient);
// provide(ApolloClients, {
//   default: apolloClient,
//   publicApolloClient,
// });

const { mutate } = useMutation(
  gql`
    mutation DoStuff($name: String!) {
      someWork(name: $name) {
        success
        timeSpent
      }
    }
  `,
  {
    clientId: "publicApolloClient",
    username: "jay",
  }
);
</script>

<script>
// import { useMutation } from "@vue/apollo-composable";
// import gql from "graphql-tag";
export default {
  // setup() {
  //   const { mutate } = useMutation(
  //     gql`
  //       mutation DoStuff($name: String!) {
  //         someWork(name: $name) {
  //           success
  //           timeSpent
  //         }
  //       }
  //     `,
  //     {
  //       username: "jay",
  //     }
  //   );

  //   return {
  //     mutate,
  //   };
  // },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
