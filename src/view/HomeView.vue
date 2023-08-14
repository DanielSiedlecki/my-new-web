<template>
    <div class="view-container" >
    <home @visibilityEmit="aboutMeOn()" ></home>
    <div ref="aboutMe">
    <about-me  v-if="aboutMeVisibility"  ></about-me>
    </div>
    
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
    methods:{
     aboutMeOn() {
        this.aboutMeVisibility = true;
        this.$nextTick(() => {
            const aboutMeRef = this.$refs.aboutMe as HTMLElement;
            if (aboutMeRef) {
                aboutMeRef.scrollIntoView({ behavior: 'smooth' });
            }
        });
        }
    }
}
    




        
    
)
</script>



<style lang="scss">

    .view-container{
        width: 100%;
        height: 100%;
        overflow-x:hidden;
        position: relative;
        
    }

    

</style>