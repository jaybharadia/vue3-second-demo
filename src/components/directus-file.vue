<template>
    <div class="flex gap-8 flex-wrap">
        <div class="w-[400px] h-[300px]">
            <img id="image" src="/google-io.jpeg" />
        </div>

        <div id="preview" class="w-[400px] h-[300px]" style="overflow: hidden">
            <!-- <img :src="cropped" /> -->
            <!-- <img  /> -->
        </div>
    </div>
</template>

<script>
import { uploadFiles } from "@directus/sdk";
import Cropper from "cropperjs";

import "cropperjs/dist/cropper.css";

export default {
    inject: ["$rest"],
    data() {
        return {
            cropped: null,
        };
    },
    mounted() {
        const image = document.getElementById("image");

        // console.log("this $rest", this.$rest);

        const _this = this;
        console.log(
            "🚀 ~ file: directus-file.vue:24 ~ mounted ~ _this:",
            _this
        );

        const cropper = new Cropper(image, {
            // zoomable: false,
            // aspectRatio: 16 / 9,
            viewMode: 1,
            // dragMode: "move",
            cropBoxResizable: false,
            // autoCropArea: 0.5,
            preview: "#preview",
            modal: true,
            background: false,
            zoomable: false,
            crop(event) {
                console.log(
                    "🚀 ~ file: directus-file.vue:48 ~ crop ~ event:",
                    event
                );

                _this.cropped = cropper.getCroppedCanvas().toDataURL();
            },
        });
    },
    methods: {
        handleCrop() {},
        async upload(event) {
            console.log(
                "🚀 ~ file: directus-file.vue:12 ~ upload ~ file:",
                event.target.files[0]
            );

            const file = event.target.files[0];

            const formData = new FormData();

            formData.append("file", file);

            const result = await this.$rest.request(uploadFiles(formData));
            console.log(
                "🚀 ~ file: directus-file.vue:28 ~ upload ~ result:",
                result
            );
        },
    },
};
</script>

<style scoped>
/* Make sure the size of the image fits perfectly into the container */
img {
    display: block;

    /* This rule is very important, please don't ignore this */
    max-width: 100%;
}
</style>
