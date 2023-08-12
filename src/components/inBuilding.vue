<template>
  <div
    class="inBuilding-container d-flex flex-column justify-content-center align-items-center"
  >
    <span class="text-title d-flex flex-column align-items-center mt-2"
      ><h1 class="display-4">Website in Building</h1>
      <span class="display-6 d-flex flex-column flex-lg-row align-items-center">
        <a class="me-3">please come back later or</a>
        <router-link to="/home"><a style="color: #3b71ca;"> you can see draft version <span style="text-decoration: underline;">link</span></a></router-link>
      </span>
    </span>

    <contact-form></contact-form>


  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactForm from './ContactForm.vue'



export default defineComponent({
    components: {
        ContactForm,
        
        
    }
})
       
</script>


<style lang="scss" scoped>
.inBuilding-container {
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100000;
  overflow: auto;


  
}
</style>
