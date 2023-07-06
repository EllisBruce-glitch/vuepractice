<script setup>
import ButtonOrange from '@/components/elements/ButtonOrange.vue'

defineProps({
    text: {
        type: String,
        default: 'Please fill E-mail & password to login your Shopee application account.'
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
            <span>Email</span>
            <div class="input">
                <input type="text" placeholder="email@example.com" />
            </div>
        </div>
        <div class="input-container">
            <span>Password</span>
            <div class="input">
                <input type="password" placeholder="Password" />
                <img src="@/assets/images/svgs/eye.svg" alt="">
            </div>
        </div>

        <div class="CM-FP-container">
            <input type="checkbox" checked="checked" />
            <a :href="forgotPasswordLink">Forgot Password?</a>
        </div>


        <ButtonOrange link="/signin" text="Sign In" class="button" />

    </div>
</template>

<style scoped>
.margin {
    margin-top: 27px;
}

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

.CM-FP-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 303px;
    height: 22px;
}

.CM-FP-container>input[type="checkbox"] {
    cursor: pointer;
    width: 22px;
    height: 22px;
}

.CM-FP-container>a {
    text-decoration: none;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #3E4958;
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
    margin-top: 60px;
}
</style>