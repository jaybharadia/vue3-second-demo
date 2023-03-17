<template>
  <div class="flex gap-8 items-center stats">
    <div>
      <p class="value">12</p>
      <p class="label">Views</p>
    </div>

    <div>
      <p class="value">0</p>
      <p class="label">Dates</p>
    </div>

    <div>
      <p class="value">0</p>
      <p class="label">Likes</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stats .label {
  @apply opacity-60 text-sm text-white;
}

.stats .value {
  @apply text-center text-white;
}
</style>
