
<script setup>
import WhiteContainer from '@/components/container/WhiteContainer.vue'
import TopComponentsContainer from '@/components/container/TopComponentsContainer.vue'
import SearchSection from '@/components/sections/shop/SearchSection.vue'
import BannerSection from '@/components/sections/shop/BannerSection.vue'
import WalletSection from '@/components/sections/shop/WalletSection.vue'
import CategorySlider from '@/components/sections/shop/CategorySlider.vue'
// import CategoriesSection from '@/components/sections/CategoriesSection.vue'
import ShopSection from '@/components/sections/shop/ShopSection.vue'
import BottomNavigation from '@/components/navigations/BottomNavigation.vue'
</script>


<template>
  <WhiteContainer>
    <TopComponentsContainer>
      <SearchSection />
      <BannerSection />
    </TopComponentsContainer>
    <WalletSection />
    <CategorySlider />
    <ShopSection />
    <BottomNavigation />
  </WhiteContainer>
</template>


<style scoped></style>