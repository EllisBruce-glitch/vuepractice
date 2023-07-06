<template>
    <div class="category-slider">
        <div class="slider-wrapper">
            <div class="slide" v-for="(category, index) in categories" :key="index"
                :class="{ active: currentSlide === index }">

                <div class="category-container">
                    <div class="item" v-for="(image, categoryIndex) in category.images" :key="categoryIndex">
                        <div class="img-container">
                            <div class="category-img"><img :src="image" alt="Category Image"></div>
                        </div>



                        <div class="category-item-name">
                            <div class="text-container">
                                <div class="text-item">
                                    <span>{{ category.titles[categoryIndex] }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="slider-dots">
            <span v-for="(category, index) in categories" :key="index" :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"></span>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const categories = ref([
    {
        name: 'Category 1',
        description: 'This is the first category',
        images: [
            require('@/assets/images/svgs/food.svg'),
            require('@/assets/images/svgs/food.svg'),
            require('@/assets/images/svgs/food.svg'),
            require('@/assets/images/svgs/food.svg')
        ],
        titles: [
            'Shopee Food',
            'Shopee Food',
            'Shopee Food',
            'Shopee Food'
        ]
    },
    {
        name: 'Category 2',
        description: 'This is the second category',
        images: [
            require('@/assets/images/svgs/shoppingbag.svg'),
            require('@/assets/images/svgs/shoppingbag.svg'),
            require('@/assets/images/svgs/shoppingbag.svg'),
            require('@/assets/images/svgs/shoppingbag.svg'),
        ],
        titles: [
            'Shopee Mall',
            'Shopee Mall',
            'Shopee Mall',
            'Shopee Mall'
        ]
    },

    {
        name: 'Category 3',
        description: 'This is the 3rd category',
        images: [
            require('@/assets/images/svgs/clarityshoppingcart.svg'),
            require('@/assets/images/svgs/clarityshoppingcart.svg'),
            require('@/assets/images/svgs/clarityshoppingcart.svg'),
            require('@/assets/images/svgs/clarityshoppingcart.svg'),
        ],
        titles: [
            'Shopee Supermarket',
            'Shopee Supermarket',
            'Shopee Supermarket',
            'Shopee Supermarket'
        ]
    },
    {
        name: 'Category 4',
        description: 'This is the 4th category',
        images: [
            require('@/assets/images/svgs/seabank.svg'),
            require('@/assets/images/svgs/seabank.svg'),
            require('@/assets/images/svgs/seabank.svg'),
            require('@/assets/images/svgs/seabank.svg'),
        ],
        titles: [
            'Seabank',
            'Seabank',
            'Seabank',
            'Seabank'
        ]
    },

    {
        name: 'Category 5',
        description: 'This is the 5th category',
        images: [
            require('@/assets/images/svgs/food.svg'),
            require('@/assets/images/svgs/shoppingbag.svg'),
            require('@/assets/images/svgs/clarityshoppingcart.svg'),
            require('@/assets/images/svgs/seabank.svg'),
        ],
        titles: [
            'Seabank',
            'Seabank',
            'Seabank',
            'Seabank'
        ]
    }

    // Add more categories with images and titles as needed
]);

const currentSlide = ref(0);

const goToSlide = (index) => {
    currentSlide.value = index;
};
</script>
  
<style scoped>
.category-slider {
    width: 375px;
    height: 106px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 42.61px;
}

.slider-wrapper {
    width: 375px;
    flex: 1;
    display: flex;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.slide {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.slide.active {
    display: flex;
}

.category-container {
    height: 85px;
    width: 350px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
}

.img-container {
    height: 55px;
    width: 61px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
}

.category-img {
    background-color: #ff5f00;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: none;
    border-radius: 12px;
    height: 55px;
    width: 55px;
}


.category-item-name {
    margin-top: 8px;
    height: 22px;
    width: 61px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
}

.text-container {
    height: 22px;
    width: 61px;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
}

.text-item {
    width: 61px;
    height: 22px;
    display: flex;
}


.text-item>span {
    font-family: 'Montserrat', sans-serif;
    color: #3E4958;
    width: 61px;
    font-size: 9px;
    font-weight: 600;
    line-height: 10.97px;
    text-align: center;
}

.slider-dots {
    width: 48px;
    height: 5px;
    display: flex;
    justify-content: center;
    margin-top: 16px;
}

.slider-dots span {
    display: flex;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #97ADB6;
    cursor: pointer;
    display: flex;
    margin-left: 5px;
    justify-content: center;
}

.slider-dots span.active {
    background-color: #FF5F00;
}
</style>
  