<template>
    <div>
        <chat-window
            :current-user-id="currentUserId"
            :rooms="rooms"
            :messages="messages"
        />
    </div>
</template>

<script>
import ChatWindow from "vue-advanced-chat";

export default {
    components: {
        ChatWindow,
    },
    data() {
        return {
            rooms: [],
            messages: [],
            currentUserId: 1234,
        };
    },
};
</script>

<style lang="scss" scoped></style>
