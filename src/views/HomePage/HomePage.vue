<script setup>
import HomeMain from './main/HomeMain.vue'
import Footer from '@/components/footer/Footer.vue'
import Header from '../../components/header/Header.vue'
</script>
<!--  -->
<template>
  <div class="SiteContainer">
  
    <Header />
    <HomeMain />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
</style>