<script setup>
import HomeMovieList from '../HomeMovieList/HomeMovieList.vue'
import MainSidebar from '../SideBar/MainSidebar.vue'
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