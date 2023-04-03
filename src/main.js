import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "b3eda4c8-49cc-489f-90eb-ba0829e53d6d",
  });
});

app.mount("#app");
