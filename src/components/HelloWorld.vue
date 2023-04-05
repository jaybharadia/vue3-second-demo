<script setup>
import { inject } from "vue";
import { UserSettingsStateSymbol } from "../provide/ProvideUserSettings";
import { UserSettingsUpdateSymbol } from "../provide/ProvideUserSettings";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const { theme } = inject(UserSettingsStateSymbol);

const updateUserSettings = inject(UserSettingsUpdateSymbol);
const updateTheme = (value) => updateUserSettings("theme", value);

console.log("theme-->", theme);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <h4>THeme is {{ theme }}</h4>

    <button @click="updateTheme('dark')">Enable darkmode</button>
    <button @click="updateTheme('light')">Enable lightmode</button>

    <h3>
      You’ve successfully created a project with
      <span class="text-red-500">YESSSSSSSSS</span>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
