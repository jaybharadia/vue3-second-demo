import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueRewards from "vue-rewards";

import "./assets/style/main.css";

const app = createApp(App);

// your other plugins will be imported here

// This is the main part
app.use(VueRewards);

app.use(createPinia());
app.use(router);

app.mount("#app");
