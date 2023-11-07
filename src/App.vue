<template>
    <div class="mt-20">
        Text Area
        <textarea
            cols="50"
            rows="20"
            @input="handleInput"
            class="border border-red-300"
        ></textarea>

        <div id="myModal" class="modal" ref="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal...</p>
            </div>
        </div>
    </div>
</template>

<script>
import getCaretCoordinates from "textarea-caret";

export default {
    mounted() {
        // document
        //     .querySelector("textarea")
        //     .addEventListener("input", function () {
        //         var caret = getCaretCoordinates(this, this.selectionEnd);
        //         console.log(
        //             "(top, left, height) = (%s, %s, %s)",
        //             caret.top,
        //             caret.left,
        //             caret.height
        //         );
        //     });
    },
    methods: {
        handleInput(e) {
            console.log("🚀 ~ file: App.vue:27 ~ handleInput ~ e:", e);

            var caret = getCaretCoordinates(e.target, e.target.selectionEnd);
            this.$refs.modal.style.top = 80 + caret.top + "px";
            this.$refs.modal.style.left = 80 + caret.left + "px";
            this.$refs.modal.style.display = "block";
        },
    },
};
</script>

<style>
.modal {
    display: none; /* Hidden by default */
    position: absolute; /* Positioned relative to the nearest positioned ancestor */
    z-index: 2; /* Sit on top */
    padding: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
    /* Adjust the style as needed */
}

.modal-content {
    background-color: #fefefe;
    border: 1px solid #888;
    padding: 20px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
