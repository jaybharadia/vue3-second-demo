<template>
    <div>
        <h1>TinyMCE Quick Start Guide</h1>
        <form method="post">
            <textarea id="mytextarea" v-model="content">Hello, World!</textarea>

            <!-- <div
                id="widget_container"
                style="height: 500px; z-index: 99999; padding: 20px"
            ></div> -->
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: "",
            CLOUDINARY_NAME: "dmparrmdk",
            CLOUDINARY_KEY: "353997448357236",
            CLOUDINARY_SECRET: "zsecsEs4_cEuLeL2-0rduNgPIhM",
            CLOUDINARY_PRESET: "ml_default",
            libraryWidget: null,
            library_widget_config: {
                cloud_name: "dmparrmdk",
                api_key: "353997448357236",
                remove_header: false,
                max_files: "1",
                insert_caption: "Insert",
                default_transformations: [[]],
                button_class: "myBtn",
                button_caption: "Select Image or Video",
            },
        };
    },
    mounted() {
        this.libraryWidget = cloudinary.createMediaLibrary(
            this.library_widget_config
            // {
            //     insertHandler: this.onSelectFromGallery,
            // }
        );

        tinymce.init({
            selector: "#mytextarea",
            plugins: ["image", "media", "paste", "imagetools"],
            toolbar: "image",
            // images_upload_handler: () => {
            //     this.libraryWidget.show();
            // },
            file_picker_callback: () => {
                this.libraryWidget.show();
            },
        });
        console.log("cloiundinaria", cloudinary);
    },
    methods: {
        onSelectFromGallery(response) {
            this.input(response.assets[0]);
        },
    },
};
</script>

<style scoped></style>
