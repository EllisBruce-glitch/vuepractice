
<script setup>
import MobileContainer from '@/components/container/MobileContainer.vue'
import SearchSection from '@/components/sections/SearchSection.vue'
import BannerSection from '@/components/sections/BannerSection.vue'
import WalletSection from '@/components/sections/WalletSection.vue'
import CategoriesSection from '@/components/sections/CategoriesSection.vue'
import ShopSection from '@/components/sections/ShopSection.vue'
import BottomNavigation from '@/components/navigations/BottomNavigation.vue'
</script>


<template>
  <MobileContainer>
    <SearchSection />
    <BannerSection />
  </MobileContainer>
  <WalletSection />
  <CategoriesSection />
  <ShopSection />
  <BottomNavigation />
</template>


<style scoped></style>