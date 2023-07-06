<script setup>
import ButtonWhite from '@/components/elements/ButtonWhite.vue'
import ButtonSplash from '@/components/elements/ButtonSplash.vue'
</script>

<template>
    <div class="button-container">
        <ButtonWhite link="/signup" text="Sign Up" />
        <ButtonSplash link="/signin" text="Sign In" />
    </div>
</template>

<style scoped>
.button-container {
    margin-top: 180px;
}
</style>
