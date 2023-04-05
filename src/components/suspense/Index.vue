<template>
  <slot v-if="error" name="error" :error="error"></slot>
  <Suspense v-else>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #fallback>
      <slot name="fallback"></slot>
    </template>
  </Suspense>
</template>

<script>
import { ref, onErrorCaptured } from "vue";

export default {
  name: "SuspenseBase",
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      console.log("errir-->", e);
      error.value = e;

      return true;
    });

    return { error };
  },
};
</script>
