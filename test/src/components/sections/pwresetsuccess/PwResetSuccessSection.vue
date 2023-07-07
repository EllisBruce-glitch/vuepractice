<script setup>
import Slider from '@/components/elements/Slider.vue'
import ButtonOrange from '@/components/elements/ButtonOrange.vue'



defineProps({

    maintext: {
        type: String,
        default: 'Success'
    },

    subtext: {
        type: String,
        default: 'Success'
    }
})


</script>


<template>
    <div class="container">

        <div class="element-container">
            <img src="@/assets/images/svgs/CheckSuccess80.svg" alt="">
            <div class="text-container">
                <span id="main-text">{{ maintext }}</span>
                <span id="sub-text">{{ subtext }}</span>
            </div>
        </div>

        <div class="button-container">
            <ButtonOrange link="/welcomeback" text="Login" />
        </div>

    </div>


    <Slider />
</template>

<style scoped>
.container {
    height: 812px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.element-container {
    margin-top: 262px;
    width: 209px;
    height: 231px;
}

.element-container>img {
    margin-left: 9.77px;
}

.text-container {
    margin-top: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.text-container>#main-text {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    text-align: center;
    color: #3E4958;
}


.text-container>#sub-text {
    margin-top: 7px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    color: #D5DDE0;
}


.button-container {
    margin-top: 203px;
}
</style>