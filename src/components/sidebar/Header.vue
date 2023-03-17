<template>
  <div
    class="bg-black flex flex-col gap-4 items-center justify-center h-[320px] md:h-[270px]"
  >
    <span class="absolute right-4 top-4 text-2xl" @click="$emit('hide')"
      >x</span
    >
    <img src="@/assets/images/profile.png" width="80" />
    <h3 class="text-white">James G.Yales</h3>
    <Stats />
  </div>
</template>

<script>
import Stats from "./Stats.vue";
export default {
  components: {
    Stats,
  },
};
</script>

<style lang="scss" scoped></style>
