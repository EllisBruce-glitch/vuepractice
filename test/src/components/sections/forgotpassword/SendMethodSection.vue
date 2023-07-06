<script setup>

import Slider from '@/components/elements/Slider.vue'


defineProps({
    text: {
        type: String,
        default: 'Select which contact details should we use to reset your password:'
    },

    recoveryPageLink: {
        type: String,
        default: '/'
    },

    smsNumber: {
        type: String,
        default: '****** ***61'
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

        <a :href="recoveryPageLink" class="method-container">
            <div class="icon-container"><img src="@/assets/images/svgs/phone.svg" alt="phone"></div>
            <div class="inf-container">
                <span id="title">via sms:</span>
                <span id="data">{{ smsNumber }}</span>
            </div>
        </a>

        <a :href="recoveryPageLink" class="method-container">
            <div class="icon-container"><img src="@/assets/images/svgs/message2.svg" alt="phone"></div>
            <div class="inf-container">
                <span id="title">via email:</span>
                <span id="data">{{ emailAddress }}</span>
            </div>
        </a>

    </div>

    <Slider />
</template>

<style scoped>
.info-container {
    margin-top: 16px;
    width: 303px;
    height: 451px;
    /* background-color: rgb(22, 98, 98); */
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
    letter-spacing: 0px;
    text-align: left;

}

.method-container {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    /* background-color: aqua; */
    margin-top: 6px;
    width: 303px;
    height: 112px;
    border-radius: 14px;
    border: solid 0.5px #D5DDE0;
}

.icon-container {
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    width: 92.59px;
    height: 100px;
    border-radius: 7px;
    border: solid 0.37px #D5DDE0;
}

.inf-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 6px;
    width: 175px;
    height: 40px;
}

.inf-container>#title {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #3E4958;
}

.inf-container>#data {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #3E4958;
}
</style>