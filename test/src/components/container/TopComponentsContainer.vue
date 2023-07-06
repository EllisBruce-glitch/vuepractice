<template>
    <div class="top-cont">
        <div class="top-container">
            <slot></slot>
        </div>
    </div>
</template>

<script></script>

<style scoped>
.top-cont {
    max-width: 1140px;
}

.top-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 375px;
    height: 230.55px;
    background: #ED532D;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

}
</style>
