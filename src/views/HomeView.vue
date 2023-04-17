<script setup>
import Filter from "../components/Filter.vue";
// import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <Filter
      :filterItem="{
        age: null,
        type: '',
      }"
    />
    <!-- <TheWelcome /> -->
  </main>
</template>
