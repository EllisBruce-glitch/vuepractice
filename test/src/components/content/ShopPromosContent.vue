<template>
  <div class="promo-container">
    <div class="promo-container-individual1">
      <span>12.12</span>
    </div>
    <div class="promo-container-individual2">
      <!-- <img src="@/assets/images/svgs/deliverytruck.svg" alt=""> -->
      <img loading="lazy" class="truck-icon" :src="require('@/assets/images/svgs/deliverytruck.svg')" />
      <span>FREE SHIPPING</span>
    </div>
    <div class="promo-container-individual3">
      <div>
        <span id="fshp">XTRA</span>
        <span id="fmnt">CASHBACK</span>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.promo-container {
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 8px;
  height: 12px;
  width: 110px;
}

.promo-container-individual1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5f00;
  border-radius: 6px;
  height: 12px;
  width: 36px;
}

.promo-container-individual1>span {
  font-family: 'shopee';
  font-size: 9px;
  font-weight: 800;
  line-height: 11px;
  color: #fff;
  text-align: center;
  margin-top: 1px;
}

.promo-container-individual2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00d3a1;
  border-radius: 6px;
  height: 12px;
  width: 35px;
}

.promo-container-individual2>.truck-icon {
  width: 9px;
  height: 9px;
  margin-right: 1px;
}


.promo-container-individual2>span {
  width: 16px;
  height: 10px;
  font-family: 'shopee';
  font-size: 4px;
  font-weight: 800;
  line-height: 5px;
  margin-top: 1px;
  color: #fff;
  margin-right: 1px;
}

.promo-container-individual3 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ff5f00;
  border-radius: 6px;
  height: 12px;
  width: 35px;
}

.promo-container-individual3>div {
  width: 22px;
  height: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.promo-container-individual3>div>#fshp {
  width: 25px;
  height: 10px;
  font-family: 'shopee';
  font-size: 4px;
  font-weight: 800;
  line-height: 5px;
  margin-top: 1px;
  color: #fff;
  text-align: left;
}

.promo-container-individual3>div>#fmnt {
  width: 25px;
  height: 10px;
  font-family: 'shopee';
  font-size: 4px;
  font-weight: 800;
  line-height: 5px;
  color: #FFC900;
}
</style>