<script setup >
import HomeSwiper from '@/components/MainParts/swiper/HomeSwiper.vue'
import MainMiddle from '@/components/MainParts/MainMiddle/MainMiddle.vue'
import ProSearch from '@/components/MainParts/MainProSearch/ProSearch.vue'
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