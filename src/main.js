import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import installGraphql from "@/plugins/graphql";
const app = createApp(App);

installGraphql(app);

app.use(createPinia());
app.use(router);

app.mount("#app");
