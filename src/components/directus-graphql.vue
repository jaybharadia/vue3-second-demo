<template>
    <div></div>
</template>

<script lang="ts">
export default {
    inject: ["$graphql"],
    async mounted() {
        const result = await this.$graphql.query(`
        query{
            sw_pages{
                title
                description
            }
        }
        `);
        console.log(
            "🚀 ~ file: directus-graphql.vue:17 ~ mounted ~ result:",
            result
        );
    },
};
</script>

<style scoped></style>
