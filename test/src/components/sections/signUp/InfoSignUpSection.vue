<script setup>
import ButtonOrange from '@/components/elements/ButtonOrange.vue'
</script>


<template>
    <div class="info-container">
        <div class="margin"></div>
        <div class="input-container">
            <span>Name</span>
            <div class="input">
                <input type="text" placeholder="Your Name Here" />
            </div>
        </div>
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

        <ButtonOrange link="/signup" text="Sign Up" class="button" />

    </div>
</template>

<style scoped>
.info-container {
    margin-top: 16px;
    width: 303px;
    height: 451px;
    /* background-color: rgb(22, 98, 98); */
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
    margin-top: 42px;
}
</style>