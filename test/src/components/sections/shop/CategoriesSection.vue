<template>
  <div class="category">
    <div class="category-container">

      <!-- CATEGORY PCITURES -->

      <div class="category-list">
        <div class="item-container">
          <div class="category-item">
            <img src="@/assets/images/svgs/food.svg" alt="" />
          </div>
        </div>
        <div class="item-container">
          <div class="category-item">
            <img src="@/assets/images/svgs/shoppingbag.svg" alt="" />
          </div>
        </div>
        <div class="item-container">
          <div class="category-item">
            <img src="@/assets/images/svgs/clarityshoppingcart.svg" alt="" />
          </div>
        </div>
        <div class="item-container">
          <div class="category-item">
            <img src="@/assets/images/svgs/seabank.svg" alt="" />
          </div>
        </div>
      </div>

      <!--CATEGORY NAMES-->

      <div class="category-item-name">
        <div class="itemname-container">
          <span class="itemname">{{ categories.food }}</span>
        </div>
        <div class="itemname-container">
          <span class="itemname">{{ categories.mall }}</span>
        </div>
        <div class="itemname-container">
          <span class="itemname">{{ categories.supermarket }}</span>
        </div>
        <div class="itemname-container">
          <span class="itemname">{{ categories.seabank }}</span>
        </div>
      </div>

      <!-- CATEGORY SLIDER -->

      <div class="category-slider">
        <div class="category-slider-container">
          <img src="@/assets/images/svgs/dot3.svg" alt="" />
          <img src="@/assets/images/svgs/dot2.svg" alt="" />
          <img src="@/assets/images/svgs/dot2.svg" alt="" />
          <img src="@/assets/images/svgs/dot2.svg" alt="" />
          <img src="@/assets/images/svgs/dot2.svg" alt="" />


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categories = ref({
  food: "Shopee Food",
  mall: "Shopee Mall",
  supermarket: "Shopee Supermarket",
  seabank: "Seabank"
  // picture: "@/assets/images/svgs/dot2.svg"
})


</script>

<style scoped>
.category {
  margin-top: 42.61px;
  width: 100%;
  height: 106px;
  display: flex;
  align-items: flex-start;
}

.category-container {
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
}

/* CATEGORY SECTION - PICTURES */

.category-list {
  height: 55px;
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
}

.item-container {
  height: 55px;
  width: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
}

.category-item {
  background-color: #ff5f00;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 12px;
  height: 55px;
  width: 55px;
}

/* CATEGORY SECTION - NAMES */

.category-item-name {
  margin-top: 8px;
  height: 22px;
  width: 350px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
}

.itemname-container {
  height: 22px;
  width: 61px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
}

.itemname {
  font-family: 'Montserrat', sans-serif;
  color: #3E4958;
  width: 61px;
  font-size: 9px;
  font-weight: 600;
  line-height: 10.97px;
  text-align: center;

}

/* CATEGORY SECTION - SLIDER */

.category-slider {
  width: 48px;
  height: 5px;
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
}

.category-slider-container {
  width: 48px;
  height: 5px;
  display: flex;
  justify-content: space-around;
}
</style>
