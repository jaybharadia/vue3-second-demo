<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { useVirtualList, useToggle } from "@vueuse/core";
import { computed } from "vue";

const [isEven, toggle] = useToggle();
const allItems = Array.from(Array(9999).keys());
const filteredList = computed(() =>
    allItems.filter((i) => (isEven.value ? i % 2 === 0 : i % 2 === 1))
);

const { list, containerProps, wrapperProps } = useVirtualList(filteredList, {
    itemHeight: 22,
});
</script>

<template>
    <header>
        <div style="width: 400px">
            <p>Showing {{ isEven ? "even" : "odd" }} items</p>
            <button @click="toggle">Toggle Even/Odd</button>
            <div v-bind="containerProps" style="height: 300px">
                <div v-bind="wrapperProps">
                    <!-- <div
                        v-for="item in list"
                        :key="item.index"
                        style="height: 22px"
                    >
                        Row: {{ item.data }}
                    </div> -->

                    <select v-bind="wrapperProps">
                        <option
                            v-for="item in list"
                            :key="item.index"
                            style="heigth: 22px"
                            :value="item.data"
                        >
                            Row : {{ item.data }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="125"
            height="125"
        />

        <!-- <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <h3 class="text-cyan-500 font-mono text-xl">TAILWIND APPLIED</h3>

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
    </header>

    <!-- <RouterView /> -->
</template>

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
