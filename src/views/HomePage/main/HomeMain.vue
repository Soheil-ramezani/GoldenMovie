<script setup >
import HomeSwiper from './swiper/HomeSwiper.vue'
import MainMiddle from './MainMiddle/MainMiddle.vue'
import ProSearch from './MoviesProSearch/ProSearch.vue'
</script>
<template>
  <main class="main-site">
    <HomeSwiper />
    <ProSearch />
    <MainMiddle />
  </main>
</template>

<script>
export default {
  name: 'HomeMain'
}
</script>

<style>
</style>