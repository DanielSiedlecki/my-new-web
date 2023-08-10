<template>

<div class="app" style="width: 100vw; height: 100vh;">

<nav-bar/>
<router-view></router-view>

  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';


export default defineComponent({
  components: {
    Home, NavBar
  }
})
</script>



<style lang="scss">
@import '~@/../mdb/scss/index.free.scss';



</style>
