<script setup>

defineProps({
    text: {
        type: String,
        default: 'Sign/Up with'
    },

    question: {
        type: String,
        default: 'Already or Dont Have'
    },

    linkTitle: {
        type: String,
        default: null
    },

    belowLink: {
        type: String,
        default: "/"
    }

})

</script>

<template>
    <div class="SocMed-container">
        <div class=method-container>
            <img src="@/assets/images/shapes/Rectangle57.svg" alt="------------">
            <span>{{ text }}</span>
            <img src="@/assets/images/shapes/Rectangle57.svg" alt="------------">
        </div>
        <div class="logo-container">
            <img src="@/assets/images/svgs/Gmail.svg" alt="">
            <img src="@/assets/images/svgs/Fb.svg" alt="">
        </div>
        <div class="already-container">
            <Span id="question">{{ question }}</Span> <a id="linkText" :href="belowLink"> {{ linkTitle }}</a>
            <!-- <a href="/Home">Home</a> -->
            <!-- <router-link :to="{ name }" id="linkText"> {{ linkText }}</router-link> -->
        </div>
    </div>
</template>

<style scoped>
.SocMed-container {
    margin-top: 50px;
    width: 303px;
    height: 172px;
    /* background-color: rgb(160, 160, 160); */
}

.method-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.method-container>span {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    color: #3E4958;
}

.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 303px;
    height: 60px;
    margin-top: 28px;
}

.already-container {
    width: 303px;
    height: 17px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.already-container>#question {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    color: #3E4958;

}

.already-container>#linkText {
    margin-left: 2px;
    text-decoration: none;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: 0em;
    color: #FF5F00;

}
</style>