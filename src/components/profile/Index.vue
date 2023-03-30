<template>
  <div>
    {{ count.toFixed(2) }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  foo: string;
  bar?: number;
}
</script>

<style scoped></style>
