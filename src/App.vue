<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

// import { ref } from "vue";
// import { useInfiniteScroll } from "@vueuse/core";

// const el = ref < HTMLElement > null;
// const data = ref([1, 2, 3, 4, 5, 6]);

// console.log("el-->", el);
// const inf = useInfiniteScroll(
//   el,
//   () => {
//     // load more

//     console.log("inside infiinte scroll");
//     data.value.push(...moreData);
//   }
//   // { distance: 10 }
// );

// console.log("infintie--scroll", inf);
</script>

<script>
import { useInfiniteScroll } from "@vueuse/core";

export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    };
  },
  mounted() {
    console.log("refs-->", this.$refs.el);
    const inf = useInfiniteScroll(
      this.$refs.el,
      (callbackRes) => {
        console.log(
          "🚀 ~ file: App.vue:49 ~ mounted ~ callbackRes:",
          callbackRes
        );

        // load more

        console.log("inside infiinte scroll");
        // this.items.push(...this.items);
      }
      // { distance: 10 }
    );
    console.log("🚀 ~ file: App.vue:47 ~ mounted ~ inf:", inf);
  },
  methods: {
    loadMore() {
      console.log("inside load more");
    },
  },
};
</script>

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
    </div>
  </header>
  <div ref="el" class="infinite-scroll" v-infinite-scroll="loadMore">
    <div v-for="item in items">
      {{ item }}
    </div>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
.infinite-scroll {
  max-height: 90px;
  overflow-y: scroll;
}
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
