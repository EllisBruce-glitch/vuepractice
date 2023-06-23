<template>
  <div class="mobile-container">
    <div class="top-container">
      <Search />
      <Banner />
      <Wallet />
    </div>

    <Categories />
    <Shop />
    <Navigation />
    <!-- BODY <br />
    <Header />
    <Footer /> -->
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Banner from '@/components/Banner.vue'
import Wallet from '@/components/Wallet.vue'
// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
import Categories from '@/components/Categories.vue'
import Shop from '@/components/Shop.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Search,
    Banner,
    Wallet,
    // Header,
    // Footer,
    Categories,
    Shop,
    Navigation
  }
}
</script>

<style>
#app {
  width: 375px;
  height: 812px;
  background-color: #FFFFFF;
}

.mobile-container {
  max-width: 1140px;
}

.top-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 375px;
  height: 230.55px;
  background: #ED532D;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;

}
</style>
