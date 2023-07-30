<template>
    
    <div class="custom-container d-flex flex-column">


    <div class="line"></div>
    
        <div class="title d-flex flex-column">


           
            <span class="upper_text"> I'm Daniel, a </span> <span class="lower_text">Web Developer</span>
           
        </div>


        <div class="description">


            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.

        </div>


        







        </div>



    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style lang="scss" scoped>



.line {
    height: 2vmin;
    width: 45vw;
    background-color: white;
   
}

   .title {
  font-weight: 600;
  color: white;
  font-size: 12vmin ;
 
        .upper_text {
              font-size: 10vmin ;

        }
    
}

.description {
    font-size: 3vmin;
    max-height: 5rem;
    color: white transparent;

}


</style>