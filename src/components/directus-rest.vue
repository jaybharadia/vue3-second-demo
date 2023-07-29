<template>
    <div></div>
</template>

<script>
import { readItems, aggregate } from "@directus/sdk/rest";

export default {
    inject: ["$rest"],

    async mounted() {
        const result = await this.$rest.request(
            readItems("sw_pages", {
                fields: [
                    "title",
                    "description",
                    {
                        sections: ["*"],
                    },
                ],
            })
        );

        // const result = await this.$rest.request(
        //     aggregate("sw_pages", {
        //         aggregate: { count: "*" },
        //     })
        // );

        console.log("🚀 ~ file: rest.vue:9 ~ result:", result);
    },
};
</script>

<style scoped></style>
