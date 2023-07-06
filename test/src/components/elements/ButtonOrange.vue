<script setup>

defineProps({
    text: {
        type: String,
        default: 'Title of Button Here'
    },

    link: {
        type: String,
        default: '/'
    }
})

</script>


<template>
    <a class="button" :href="link"> {{ text }} </a>
</template>


<style scoped>
a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.5px;
    font-family: 'Montserrat', sans-serif;
}

.button {
    width: 303px;
    height: 60px;
    border: none;
    background-color: #FF5F00;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 14px;
}
</style>