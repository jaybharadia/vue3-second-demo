import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import installPlugins from "@/plugins/index.js";
const app = createApp(App);

installPlugins(app);
app.use(createPinia());
app.use(router);

app.mount("#app");
