<template>
  <div class="top-elements">
    <div class="search-container">
      <img id="magnifier" src="@/assets/images/svgs/magnifier.svg" alt="">
      <input type="text" placeholder="Search">
      <img id="camera" src="@/assets/images/svgs/camera.svg" alt="">
    </div>
    <img id="cart" src="@/assets/images/svgs/cart.svg" alt="">
    <img id="message" src="@/assets/images/svgs/message.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    data: String
  },
  setup() {

  }
}
</script>

<style scoped>
.top-elements {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 27.59px;
  margin-top: 28.05px;
}

#magnifier {
  margin-left: 7.91px;
  width: 8.66px;
  height: 9.06px;
}

.search-container {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 240px;
  height: 27.59px;
  background-color: #F7F8F9;
  border-radius: 14px;
  margin-left: 9.52px;
}

.search-container>input {
  width: 200px;
  margin-left: 9.8px;
  border: none;
  background-color: transparent;

  &:hover {
    outline: none !important;
    border-width: 0px !important;
    border: none !important;
  }

  &:focus {
    outline: none !important;
    border-width: 0px !important;
    border: none !important;
  }
}

#camera {
  margin-left: 13.63px;
  margin-right: 9.44px;
  width: 17.56px;
  height: 14.36px;
}

#cart {
  margin-left: 32.86px;
  width: 25.41px;
  height: 22.85px;
}

#message {
  margin-left: 16.73px;
  width: 23px;
  height: 21.98px;
}
</style>


