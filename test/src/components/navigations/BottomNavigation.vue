<template>
    <div class="nav-bottom-tools">
        <div class="tools">
            <div class="tools-list">
                <div class="tools-item">
                    <img src="@/assets/images/svgs/home.svg" alt="" />
                </div>
                <div class="tools-item">
                    <img src="@/assets/images/svgs/wishlist.svg" alt="" />
                </div>
                <div class="tools-item">
                    <img src="@/assets/images/svgs/shop.svg" alt="" />
                </div>
                <div class="tools-item">
                    <img src="@/assets/images/svgs/avatar.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'NavigationComponent',
    props: {
        data: String
    },
    setup() {

    }
}
</script>
  
<style scoped>
.nav-bottom-tools {
    width: 375x;
    min-height: 60px;
    bottom: 0px;
}

.nav-bottom-container>.tools {
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    box-sizing: border-box;
}

.nav-bottom-tools>.tools>div {
    min-height: 60px;
    width: 100%;
    background: #ff5f00;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.tools-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>