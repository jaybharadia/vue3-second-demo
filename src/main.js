import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/style/main.css";

import vueForm from "@7span/vue-form";

const app = createApp(App);

app.use(vueForm);
app.use(createPinia());
app.use(router);

app.mount("#app");
