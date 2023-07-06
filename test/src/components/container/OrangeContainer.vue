<template>
    <div class="OrangeContainer">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
.OrangeContainer {
    width: 375px;
    height: 812px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background: linear-gradient(0deg, #ED4D2D 0%, #FF5B2C 100%);
}
</style>