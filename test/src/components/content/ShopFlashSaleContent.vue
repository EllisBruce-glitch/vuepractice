<template>
  <!--FLASHSALE & TIMER BANNER -->
  <div class="flashsale-container">
    <div class="flashtimer-container">
      <div class="flashname">
        <span id="flashname">{{ title }}</span>
      </div>

      <div class="timer-container">
        <div class="timer-unit">
          <span id="unit">{{ timer.hour }}</span>
        </div>
        <div class="timer-unit">
          <span id="unit">{{ timer.hour2 }}</span>
        </div>
        <div class="timer-sign">
          <span id="sign">:</span>
        </div>
        <div class="timer-unit">
          <span id="unit">{{ timer.minute }}</span>
        </div>
        <div class="timer-unit">
          <span id="unit">{{ timer.minute2 }}</span>
        </div>
      </div>
    </div>
    <!--VIEW BTN-->
    <div class="view-container">
      <div class="viewname">
        <span id="viewname">View all</span>
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'FLASHSALE'
  }
})

const timer = ref({
  hour: 0,
  hour2: 2,
  minute: 3,
  minute2: 4
})

</script>

<style scoped>
.flashsale-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 36px;
  width: 303px;
  margin-top: 22px;

}

.flashtimer-container {
  display: flex;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  height: 36px;
  width: 117px;
  /* background-color: rgb(24, 64, 64); */
}

.flashname {
  display: flex;
  /* background-color: rgb(19, 244, 244); */
  height: 25px;
  width: 117px;
}

#flashname {
  font-size: 21px;
  color: #ff5f00;
  font-weight: 700;
  line-height: 25.2px;
  font-family: 'shopee';


}

.timer-container {
  /* background-color: #ed4d2d; */
  display: flex;
  align-content: flex-start;
  height: 11px;
  width: 70px;
  gap: 0.2rem;
}

.timer-unit {
  background-color: #505050;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11px;
  width: 11px;
  border-radius: 2px;
}


#unit {
  margin-top: 1.5px;
  text-align: center;
  height: 11px;
  color: #fff;
  font-weight: 700;
  font-size: 9px;
  font-family: 'shopee';
  line-height: 10.8px;
}

.timer-sign {
  /* background-color: #505050; */
  display: flex;
  align-self: center;
  justify-content: center;
  height: 11px;
  width: 5px;
  border-radius: 1px;
}

#sign {
  color: #505050;
  font-weight: bold;
  font-size: 6px;
  display: flex;
  align-self: center;
  justify-content: center;
}


.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 76px;
  background-color: #ff5f00;
  border-radius: 7px;
  margin-top: -3px;
}

#viewname {
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}
</style>