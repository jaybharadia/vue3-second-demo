import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

console.log("service worker register main js -->", navigator.serviceWorker);
navigator.serviceWorker.register("/firebase-messaging-sw.js");
