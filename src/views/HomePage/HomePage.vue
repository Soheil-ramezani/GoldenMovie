<script setup>
import HomeMain from './main/HomeMain.vue'
import MainFooter from '../../components/footer/HomeFooter.vue'
import MainHeader from '../../components/header/HomeHeader.vue'
</script>
<!--  -->
<template>
  <div class="SiteContainer">
  
    <MainHeader />
    <HomeMain />
    <MainFooter />
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
</style>