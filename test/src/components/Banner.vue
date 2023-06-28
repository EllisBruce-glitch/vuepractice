<template>
  <div class="banner-container">
    <div class="banner-picture">
      <img src="@/assets/images/pictures/bannerimage7.jpg" alt="">
    </div>
    <div class="circleslider">
      <img id="circle" src="@/assets/images/svgs/dot1.svg" alt="">
      <img id="circle2" src="@/assets/images/svgs/dot2.svg" alt="">
      <img id="circle2" src="@/assets/images/svgs/dot2.svg" alt="">
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 357px;
  height: 112px;
  margin-top: 9.21px;
}

.banner-picture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 357px;
  height: 104px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 3px;
}

.banner-picture>img {
  width: 360px;
  height: 110px;
}

.circleslider {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5px;
}

#circle2 {
  width: 5px;
  height: 5px;
  margin-left: 3.75px;
}
</style>