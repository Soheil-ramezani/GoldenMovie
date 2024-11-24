<script setup>
import HomeMovieList from '../MovieList/MovieList.vue'
import MainSidebar from '../SideBar/MainSidebar.vue'
</script>
<template>
  <div class="main">
    <div class="main-index d-flex justify-content-between">
      <div class="right-side d-inline-block">
        <section className='site-posts d-block w-100'>
        <HomeMovieList />
        </section>
        <section class="site-posts d-block w-100">
          <MainSidebar />
        </section>   
      </div>
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