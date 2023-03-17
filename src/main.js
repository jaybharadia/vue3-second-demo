import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
import RateIt from "vue-rate";
import "vue-rate/dist/vue-rate.css";

app.use(RateIt);
app.use(createPinia());
app.use(router);

app.mount("#app");
