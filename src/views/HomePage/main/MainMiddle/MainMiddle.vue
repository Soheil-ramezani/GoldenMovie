<script setup>
import HomeMovieList from '../MovieList/HomeMovieList.vue';
import MainSidebar from '../SideBar/MainSidebar.vue';
</script>
<template>
  <div class="main">
    <div class="main-index d-flex justify-content-between">
        <HomeMovieList/>
        <MainSidebar/>
    </div>
  </div>
</template>

<script>
export default {
name:"MainMiddle"
}
</script>

<style>

</style>