<template>
    <div class="view-container" >
    <home @visibilityEmit="aboutMeOn()" ></home>
    <about-me v-if="aboutMeVisibility" ></about-me>
    
    </div>



</template>



<script lang="ts">
import { defineComponent } from 'vue'
import AboutMe from '../components/AboutMe.vue'
import Home from '../components/Home.vue'

export default defineComponent({
  components: { Home, AboutMe },
    data() {
        return {
            aboutMeVisibility: false
        }
    },

    methods: {
        aboutMeOn() {
             this.aboutMeVisibility = true
        }
    }




        
    },
)
</script>



<style lang="scss">

    .view-container{
        width: 100%;
        height: 100%;
        overflow-x:hidden ;
        position: relative;
    }

    

</style>