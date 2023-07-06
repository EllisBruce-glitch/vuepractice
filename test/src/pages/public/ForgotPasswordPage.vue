<script setup>
import WhiteContainer from '@/components/container/WhiteContainer.vue';
import TitleSection from '@/components/sections/TitleSection.vue'
import SendMethodSection from '@/components/sections/forgotpassword/SendMethodSection.vue'
</script>

<template>
    <WhiteContainer>
        <TitleSection title="Forgot Password" />
        <SendMethodSection recoveryPageLink="/recovery" />
    </WhiteContainer>
</template>