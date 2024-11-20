<script setup>
import HomeMain from './main/HomeMain.vue';

// import MainFooter from './footer/MainFooter.vue'
import MainHeader from './header/HomeHeader.vue'
</script>
<!--  -->
<template>
   <div class="SiteContainer">
     <MainHeader />
    <HomeMain/>
    <!-- <MainFooter /> -->
  
   </div>
   
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
</style>