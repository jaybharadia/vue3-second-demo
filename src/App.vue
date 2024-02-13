<script setup>
// import Accordion from "./components/accordion.vue";
</script>

<template>
    <!-- <Accordion /> -->
    <li v-for="(_, index) in 5">
        <div class="group/1212 is-published">
            This is Parent div
            <div class="hidden group-hover/1212:block">Published</div>
        </div>
    </li>
</template>
