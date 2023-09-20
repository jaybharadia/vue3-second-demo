<template>
    <div>
        Welcome to facbook pixel world {{ $options.version }}
        <button @click="handlePurchase">Purchase</button>
    </div>
</template>

<script>
import { version } from "../package.json";
export default {
    version,
    methods: {
        handlePurchase() {
            console.log("inside handle purchase");
            window.fbq("track", "Purchase", { currency: "USD", value: 30.0 });
        },
    },
};
</script>
