<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  data() {
    return {
      date: null,
    };
  },
  components: {
    VueDatePicker,
  },
};
</script>

<template>
  <!-- <header> -->

  <div>
    <VueDatePicker
      v-model="date"
      position="center"
      :dark="true"
    ></VueDatePicker>
  </div>
  <!-- </header> -->

  <!-- <RouterView /> -->
</template>

<style>
:root {
  --primary-color: #e0067a;
}
.dp__cell_inner.dp__pointer.dp__active_date {
  border-radius: 50%;
}
.dp__theme_dark {
  --dp-primary-color: var(--primary-color);
  --dp-icon-color: var(--primary-color);
}
</style>
