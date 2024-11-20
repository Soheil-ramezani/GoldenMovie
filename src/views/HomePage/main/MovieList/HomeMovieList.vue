<template>
  <div class="right-side d-inline-block">
    <section class="site-posts d-block w-100">
      <div ref="movies"></div>
    </section>
    <section class="site-posts d-block w-100">
      <div ref="pagination" class="pagination w-100 d-flex flex-wrap justify-content-center"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeMovieList',
  data() {
    return {
        currentPage : 1,
        rowsCount : 6,
    }
  },
  methods(){
 
  }
}
</script>

<style>
</style>