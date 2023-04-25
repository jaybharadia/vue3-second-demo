import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import infiniteScroll from "vue-infinite-scroll";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

app.use(infiniteScroll);
app.use(router);

app.mount("#app");
