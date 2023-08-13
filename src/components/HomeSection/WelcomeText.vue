<template>
    
    <div class="welcome-text d-flex flex-column ">


    <div class="line"></div>
    
        <div class="title d-flex flex-column ">
            <span class="upper_text"> I'm Daniel, a </span> <span class="lower_text">Web Developer</span>
        </div>


        <div class="description ">

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.

        </div>


        


             <div class="circle mt-2 " @click="emitVisibilityAboutMe">
                <i class="fas fa-angle-down"></i>

            </div>

        </div>
        



    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    methods: {
        emitVisibilityAboutMe() {
            this.$emit('visibilityOn', true)
        }
    }
})
</script>


<style lang="scss" scoped>


.welcome-text {

    position: relative;
}


.line {
    height: 2vmin;
    width: 45vw;
    background-color: white;
   
}

   .title {
  font-weight: 500;
  color: white;
  font-size: 12vmin ;

 
        .upper_text {
              font-size: 10vmin ;

        }
    
}

.description {
    font-size: 3vmin;
    max-height: 100%;
    color: rgba($color: white, $alpha: 0.7)


}



.circle {
    width: 64px;
    height: 64px;
    background-color: #081BC1;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        font-size: 32px;
    }
}


@media screen and (min-width: 992px) {


    .title {
        font-size: 4rem;
        ;

        .upper_text {
            font-size: 3.5rem;
        }
    }

    .line {
        width: 25%;
        height: 1vmin;
    }


    .description {
        font-size: 2vmin;
        width: 70%;
    }
    
    .circle {
        width: 88px;
        height: 88px;

        i{
            font-size: 3rem;
        }


    }
    .circle:hover {
        cursor: pointer;
    }
}


</style>