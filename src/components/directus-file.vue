<template>
    <div>
        Upload File
        <input type="file" @input="upload" />

        <div>
            <img id="image" src="/me.jpg" />
        </div>
    </div>
</template>

<script>
import { uploadFiles } from "@directus/sdk";
import Cropper from "cropperjs";

export default {
    inject: ["$rest"],
    mounted() {
        const image = document.getElementById("image");

        // console.log("this $rest", this.$rest);

        const _this = this;
        console.log(
            "🚀 ~ file: directus-file.vue:24 ~ mounted ~ _this:",
            _this
        );

        const cropper = new Cropper(image, {
            autoCrop: false,
            // zoomable: false,
            aspectRatio: 16 / 9,
            crop(event) {
                cropper.getCroppedCanvas().toBlob(async function (blob) {
                    console.log(
                        "🚀 ~ file: directus-file.vue:32 ~ cropper.getCroppedCanvas ~ blob:",
                        this
                    );

                    const formData = new FormData();

                    formData.append("file", blob);

                    const result = await _this.$rest.request(
                        uploadFiles(formData)
                    );
                    console.log(
                        "🚀 ~ file: directus-file.vue:28 ~ upload ~ result:",
                        result
                    );
                });

                console.log(event.detail.x);
                console.log(event.detail.y);
                console.log(event.detail.width);
                console.log(event.detail.height);
                console.log(event.detail.rotate);
                console.log(event.detail.scaleX);
                console.log(event.detail.scaleY);
            },
        });
    },
    methods: {
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
