<template>
  <h1>Ive some async work to do before I can render</h1>
</template>

<script>
export default {
  name: "MyAsyncComponent",
  async setup() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(true);
        reject("SERVER ERROR");
      }, 2000);
    });
  },
};
</script>
