<template>
  <div class="shopitems-container">
    <div class="item-container">
      <div class="img-container"><img src="@/assets/images/pictures/shoes.jpg" alt=""></div>
      <div class="text-container"><span>Nike React Miler</span></div>

      <ShopPromosContent />

      <div class="price-container">
        <div class="price">
          <span id="sign">{{ sign }}</span>
          <span id="price">1,299,999</span>
        </div>
        <div class="sold">
          <span id="sold">{{ sold }}</span>
        </div>
      </div>

    </div>
    <div class="item-container">
      <div class="img-container"><img src="@/assets/images/pictures/jacket.jpg" alt=""></div>
      <div class="text-container"><span>Erigo Coach Jacket Apparel Tokyo Nevy </span></div>

      <ShopPromosContent />

      <div class="price-container">
        <div class="price">
          <span id="sign">{{ sign }}</span>
          <span id="price">199.000</span>
        </div>
        <div class="sold">
          <span id="sold">{{ sold }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import ShopPromosContent from '@/components/content/ShopPromosContent.vue'

defineProps({
  sign: {
    type: String,
    default: 'Php'
  },
  sold: {
    type: String,
    default: '10,000' + ' Sold'
  }
})


</script>

<style scoped>
.shopitems-container {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 289px;
  height: 233px;
}


.item-container {
  width: 140px;
  height: 233px;
  background-color: #ffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.img-container {
  width: 125px;
  height: 135px;
  border-radius: 10px;
  border: 0.5px solid #D5DDE0;
  margin-top: 6px;
  overflow: hidden;
}

.img-container>img {
  width: 125px;
  height: 135px;
}

.text-container {
  margin-top: 8px;
  width: 125px;
  height: 30px;
  display: flex;
  align-items: flex-start;
}

.text-container>span {
  color: #3E4958;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  line-height: 14.63px;
}

.price-container {
  display: flex;
  margin-top: 6px;
  /* background-color: #0f6989; */
  height: 15px;
  width: 125px;
  justify-content: space-between;
}

.price {
  display: flex;
  flex-direction: row;
  height: 15px;
  width: 65px;
}

#sign {
  align-self: flex-end;
  font-size: 5px;
  color: #ff5f00;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  line-height: 6.1px;
}

#price {
  align-self: flex-end;
  color: #ff5f00;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  line-height: 14.63px;

}

.sold {
  display: flex;
  align-self: flex-end;
  justify-content: right;
  height: 9px;
  width: 50px;
}

#sold {
  font-family: Montserrat;
  font-size: 7px;
  font-weight: 400;
  line-height: 9px;
  letter-spacing: 0em;
  text-align: right;

}
</style>