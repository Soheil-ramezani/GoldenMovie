<script setup>
import HomeMovieList from '@/components/MainParts/HomeMovieList/HomeMovieList.vue'
import MainSidebar from '@/components/MainParts/SideBar/MainSidebar.vue'
</script>
<template>
  <div class="main">
    <div class="main-index d-flex justify-content-between">
      <!-- RightSide -->
          <HomeMovieList /> 
      <!-- LeftSide -->
      <MainSidebar />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMiddle'
}
</script>

<style>
</style>