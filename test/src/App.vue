<template>
  <!-- <div>
    <router-link :to="{ name: 'SplashScreen' }">Splash</router-link> |

  </div> -->

  <!-- <router-view /> -->

  <SignInPage />
</template>

<script setup>
// import router from './router';

// import CategorySlider from '@/components/sections/CategorySlider.vue'
// import CategoriesSection from '@/components/sections/CategoriesSection.vue'

// import HomePage from './pages/public/HomePage.vue'
// import SplashScreenPage from './pages/public/SplashScreenPage.vue'
import SignInPage from './pages/public/SignInPage.vue'

</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 850px;
  background-color: #d0cccc;
}

.margin {
  margin-left: 10px;
}
</style>