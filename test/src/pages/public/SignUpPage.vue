<script setup>
import WhiteContainer from '@/components/container/WhiteContainer.vue';
import TitleSection from '@/components/sections/TitleSection.vue'
import InfoSignUpSection from '@/components/sections/signUp/InfoSignUpSection.vue'
import SocialMediaSection from '@/components/sections/SocialMediaSection.vue'
</script>

<template>
    <WhiteContainer>
        <TitleSection title="Sign Up" />
        <InfoSignUpSection />
        <SocialMediaSection text="Or sign up with" question="Already have an account? " belowLink="/signin"
            linkTitle="Sign In" />
    </WhiteContainer>
</template>