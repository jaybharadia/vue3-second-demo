<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseApp } from "./service-worker/config";
import { ref } from "vue";

const deviceToken = ref(null);

const isNotificationSupported = () => {
  if ("Notification" in window && "requestPermission" in Notification)
    return true;
  else return false;
};

// Initialize Firebase Cloud Messaging and get a reference to the service
// const analytics = getAnalytics(app);
const messaging = getMessaging(firebaseApp);

onMessage(messaging, (payload) => {
  // Handling inApp  Notification
  console.log("Message received. ", payload);
  alert(payload.notification.title);
  // ...
});

function requestPermission() {
  console.log("Requesting permission...");
  // Notification.requestPermission().then((permission) => {
  getToken(messaging, {
    vapidKey:
      "BGmhTzvW08xIME7XbxCms_kPKsDFtPwXaMAOlVuXcBwEXTOTmlaq93mfhtrKn_lNXsgI_kcuymmbFLjGm2hhl4Y",
  }).then((res) => {
    console.log("device Token response -->", res);
    deviceToken.value = res;
  });
  if (permission === "granted") {
    console.log("Notification permission granted.");
  }
  // });
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div>
      <p>Device token {{ deviceToken }}</p>
    </div>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <h3>Version : 1.5</h3>

      <h3 class="text-cyan-500 font-mono text-xl">TAILWIND APPLIED</h3>

      <!-- v-if="isNotificationSupported()" -->
      <button @click="requestPermission()" class="p-4 bg-blue-300 rounded">
        Get Notifications
      </button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
