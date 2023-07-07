<script setup>
import ButtonOrange from '@/components/elements/ButtonOrange.vue'
import Slider from '@/components/elements/Slider.vue'

defineProps({
    text: {
        type: String,
        default: 'Your new password must be different from previously used passwords.'
    },

    signInLink: {
        type: String,
        default: '/'
    },

    forgotPasswordLink: {
        type: String,
        default: '/'
    },

})


</script>


<template>
    <div class="info-container">
        <div class="text-container">
            <span>{{ text }}</span>
        </div>


        <div class="margin"></div>
        <div class="input-container">
            <span>New Password</span>
            <div class="input">
                <input type="password" placeholder="*********" />
                <img src="@/assets/images/svgs/eye.svg" alt="">
            </div>
        </div>
        <div class="input-container">
            <span>Confirm Password</span>
            <div class="input">
                <input type="password" placeholder="*********" />
                <img src="@/assets/images/svgs/eye.svg" alt="">
            </div>
        </div>
        <div class="button">
            <ButtonOrange link="/pwresetsuccess" text="Update" />
        </div>

    </div>


    <Slider />
</template>

<style scoped>
.margin {
    margin-top: 27px;
}

.info-container {
    margin-top: 16px;
    width: 303px;
    height: 290px;
}

.text-container {
    width: 303px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: #3E4958;
    ;
}


.text-container>span {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

}

.input-container {
    width: 303px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.margin {
    margin-top: 45px;
}

.input-container>span {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #3E4958;
    ;
}

.input {
    margin-top: 9px;
    width: 303px;
    height: 60px;
    border-radius: 14px;
    border: 1px solid #cfcfcfc2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #d5dde0;

}




.input>input {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: transparent;
    height: 100%;
    width: 100%;

    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    text-justify: center;
    padding-left: 17px;
    color: #3E4958;
    outline: none;
}

.input>img {
    padding-right: 17px;
}

.button {
    margin-top: 314px;
}
</style>