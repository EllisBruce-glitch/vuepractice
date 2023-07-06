

<script setup>

defineProps({
    title: {
        type: String,
        default: 'Title Here'
    }
})

</script>


<template>
    <div class="title-container">
        <img src="@/assets/images/svgs/arrowback.svg" alt="Go Back" @click="$router.go(-1)">
        <span>{{ title }}</span>
    </div>
</template>

<style scoped>
.title-container {
    margin-top: 49px;
    width: 303px;
    height: 32px;
    display: flex;
    align-items: center;
    /* background-color: chartreuse; */
}

.title-container>img {
    width: 18.41px;
    height: 17.41px;
    cursor: pointer;
}

.title-container>span {
    margin-left: 15.59px;
    font-family: Montserrat;
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: #3E4958
}
</style>