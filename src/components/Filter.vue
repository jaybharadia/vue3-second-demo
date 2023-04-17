<template>
  <div>
    <h2>FIlter COMPONENT</h2>
    <pre>

      {{ filter }}
    </pre>

    <button @click="filter.age = 20">FILTER EDIT</button>
  </div>
</template>

<script>
import filter from "../mixins/filter";

export default {
  mixins: [filter],
  props: ["filterItem"],

  created() {
    this.initFilter(this.filterItem);
  },
};
</script>

<style lang="scss" scoped></style>
