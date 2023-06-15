<template>
  <Header />
  <Navigation />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

</script>
