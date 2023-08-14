<template>

<div class="app">

<nav-bar></nav-bar>
<router-view class=""></router-view>

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
@import './styles/GlobalStyles.scss';
 .app {

  background-color: $secondary-color ;
  
 }

</style>
