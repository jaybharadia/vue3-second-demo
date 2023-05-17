import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import VueDemiDemo from "vue-demi-demo";

const app = createApp(App);
app.use(VueDemiDemo);
app.use(createPinia());
app.use(router);

app.mount("#app");
