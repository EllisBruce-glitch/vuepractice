<script setup>
import WhiteContainer from '@/components/container/WhiteContainer.vue';
import TitleSection from '@/components/sections/TitleSection.vue'
import InfoSignInSection from '@/components/sections/signIn/InfoSignInSection.vue'
import SocialMediaSection from '@/components/sections/SocialMediaSection.vue'
</script>

<template>
    <WhiteContainer>
        <TitleSection title="Welcome back" />
        <InfoSignInSection forgotPasswordLink="/forgotpassword" />
        <SocialMediaSection text="Or sign up with" question="Don't have an account?" belowLink="/signup"
            linkTitle="Sign Up" />
    </WhiteContainer>
</template>