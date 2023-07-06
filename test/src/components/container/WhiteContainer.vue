<template>
    <div class="WhiteContainer">
        <slot></slot>
    </div>
</template>

<script setup>
</script>

<style scoped>
.WhiteContainer {
    width: 375px;
    height: 812px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    background-color: white;
}
</style>