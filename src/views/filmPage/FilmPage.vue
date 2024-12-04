<script setup>
import HomeHeader from '@/components/header/HomeHeader.vue'
import HomeFooter from '@/components/footer/HomeFooter.vue'
import FilmMain from './filmMain/FilmMain.vue'
</script>
<template>
  <div>
  <HomeHeader />
   <FilmMain :item="movieQuery"/> 
  <HomeFooter />
  </div>
</template>

<script>
export default {
    name:"FilmPage",
   data(){
    return{
      
      movieQuery: null,
    }
   },
   mounted() {
    const movie = JSON.parse(this.$route.query.movie);
    this.movieQuery=movie // Now you can use the movie object//for parsing queries
  },




}
</script>

<style>
</style>