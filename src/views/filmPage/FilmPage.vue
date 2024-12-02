<script setup>
import HomeHeader from '@/components/header/HomeHeader.vue'
import HomeFooter from '@/components/footer/HomeFooter.vue'
import FilmMain from './filmMain/FilmMain.vue'
</script>
<template>
  
  <HomeHeader />
  <FilmMain   />
  <HomeFooter />
  
</template>

<script>
export default {
    name:"FilmPage",
  

}
</script>

<style>
</style>