<template>
  <div class="wallet-container">
    <img id="qrscan" src="@/assets/images/svgs/qrscan.svg" alt="">
    <img src="@/assets/images/shapes/Rectangle117.svg" alt="">
    <div class="wallet-shop">
      <img src="@/assets/images/svgs/shopwallet.svg" alt="">
      <div class="text-container">
        <span class="main-text">{{ shopeeMoney }}</span>
        <span class="sub-text">{{ moneySub }}</span>
      </div>
    </div>
    <img src="@/assets/images/shapes/Rectangle117.svg" alt="">
    <div class="coin-shop">
      <img src="@/assets/images/svgs/coin.svg" alt="">
      <div class="text-container">
        <span class="main-text">{{ shopeeCoins }}</span>
        <span class="sub-text">{{ coinSub }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  shopeeMoney: {
    type: String,
    default: 'Rp4.982.123'
  },
  moneySub: {
    type: String,
    default: 'Isi Saldo ShopeePay'
  },
  shopeeCoins: {
    type: String,
    default: '928.300 Koin'
  },
  coinSub: {
    type: String,
    default: 'Klaim koin di sini'
  }
})

</script>

<style scoped>
.wallet-container {
  width: 357px;
  height: 67px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #cfcfcfc2;
  margin-top: 8px;
  position: absolute;
  top: 184.84px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 4px 5px 0px rgba(102, 102, 102, 0.22);
  -webkit-box-shadow: 5px 4px 5px 0px rgba(102, 102, 102, 0.22);
  -moz-box-shadow: 5px 4px 5px 0px rgba(102, 102, 102, 0.22);
}

.wallet-container>#qrscan {
  width: 28px;
  height: 28px;
  margin-left: 13px;
}

.wallet-shop {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wallet-shop>img {
  width: 26px;
  height: 26px;
}

.coin-shop {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13px;
}

.coin-shop>img {
  width: 26px;
  height: 26px;
}

.text-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 8px;

}

.main-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
}

.sub-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 7px;
  line-height: 5.86px;
}
</style>