<script>
// import Accordion from "./components/accordion.vue";
export default {
    methods: {
        trigger() {
            acEnableConversionTracking();
        },
    },
};
</script>

<template>
    <!-- <Accordion /> -->

    <button @click="trigger">Trigger Conversion</button>
</template>
