<template>
  <div class="shop-container">
    <div class="flashbanner-container">
      <span>{{ saleBanner.title }}</span>
    </div>
    <div class="main-container">
      <ShopFlashSaleContent title="FLASHSALE" />
      <ShopItemsContent sign="PHP" />
    </div>
  </div>
</template>

<script setup>

import ShopFlashSaleContent from '@/components/content/ShopFlashSaleContent.vue'
import ShopItemsContent from '@/components/content/ShopItemsContent.vue'
import { ref } from 'vue'

const saleBanner = ref({
  title: "12.12 Super Brand day"
})

</script>

<style scoped>
.shop-container {
  margin-top: 9px;
  width: 100%;
  height: 364px;
  display: flex;
  align-items: flex-end;
}

.flashbanner-container {
  background-color: #FFFFFF;
  width: 167px;
  height: 23px;
  position: absolute;
  margin-top: 20px;
  left: 24px;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  border-radius: 19px;
}

.flashbanner-container>span {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: shopee;
  font-weight: 900;
  font-size: 14px;
  color: #FF5F00;
}


.main-container {
  width: 100%;
  height: 330px;
  background-color: #F7F8F9;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;

}
</style>