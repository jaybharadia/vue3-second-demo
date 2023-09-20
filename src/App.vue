<template>
    <div>Welcome to facbook pixel world {{ $options.version }}</div>
</template>

<script>
import { version } from "../package.json";
export default {
    version,
};
</script>
