<template>
    <div id="container">
        <span> Let's celebrate! </span>
        <button @click="balloonsReward('some-id')">Click me!</button>
    </div>
</template>

<script>
export default {
    mounted() {
        const config = {
            startVelocity: 10,
            spread: 360,
            elementCount: 100,
        };
        const { reward, isAnimating } = this.$reward(
            "container",
            "confetti",
            config
        );
        reward();
    },
    methods: {
        balloonsReward(id) {
            const { reward, isAnimating } = this.$reward(id, "balloons");
            reward();
            return isAnimating;
        },
    },
};
</script>

<style>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
}
</style>
