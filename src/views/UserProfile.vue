<template>
  <div>
    <h3>User Profile</h3>
    <p>ID : {{ id }}</p>

    <button @click="$router.push({ name: 'user-profile', params: { id: 50 } })">
      Navigate
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
