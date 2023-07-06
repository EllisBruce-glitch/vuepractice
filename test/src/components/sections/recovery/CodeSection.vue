<script setup>

import Slider from '@/components/elements/Slider.vue'
import ButtonOrange from '@/components/elements/ButtonOrange.vue'


defineProps({
    text: {
        type: String,
        default: 'The recovery code was sent to your mobile. Code expiration time is 120s. Please enter the code:'
    },

    recoveryPageLink: {
        type: String,
        default: '/'
    },

    smsNumber: {
        type: String,
        default: '1'
    },

    emailAddress: {
        type: String,
        default: '******16@gmail.com'
    },



})


</script>


<template>
    <div class="info-container">
        <div class="text-container">
            <span>{{ text }}</span>
        </div>

        <div class="code-container">
            <div class="code">
                <input type="text">
            </div>

            <div class="code">
                <input type="text">
            </div>

            <div class="code">
                <input type="text">
            </div>

            <div class="code">
                <input type="text">
            </div>

        </div>

    </div>

    <div class="button-container">
        <ButtonOrange link="/newpassword" text="Send again" />
    </div>
    <Slider />
</template>

<style scoped>
.info-container {
    margin-top: 16px;
    width: 303px;
    height: 188px;
}

.text-container {
    width: 303px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 63px;
}


.text-container>span {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;

}

.code-container {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: px;
    width: 303px;
    height: 60px;
}


.code {
    display: flex;
}

.code>input {
    width: 60px;
    height: 60px;
    text-align: center;
    background-color: #F7F8F9;
    border: 0.5px solid #D5DDE0;
    border-radius: 14px;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    color: #3E4958;
}

.button-container {
    margin-top: 415px;

}
</style>