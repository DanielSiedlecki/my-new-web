<template>

    <header class="d-flex " :class="{ active: isActive }"  >

        <div class="logo d-none d-lg-flex mb-3 " >
            <img src="../assets/Navbar/navbar-logo.png" alt="logo-navbar" style="height: 80%;">
            
        </div>
    <ul  class="menu mt-5 mt-lg-0 flex-column justify-content-center flex-lg-row justify-content-lg-end gap-lg-5 me-3 align-items-lg-center  " :class="{ active: isActive }"  >
        <li class="menu-link active">Home</li>
        <li class="menu-link">About</li>
        <li class="menu-link">Portfolio</li>
        <li class="menu-link">Contact</li>
        <li class="menu-link">Other</li>


        <div class="contact-section d-flex d-lg-none justify-content-between mt-4">
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-github"></i>
            <i class="fas fa-envelope"></i>
            <i class="fas fa-phone"></i>
        </div>
        
    </ul>

    <button @click="activeMenu()" :class="{ active: isActive }" class="burger d-flex d-lg-none  animate__animated animate__fadeIn flex-column justify-content-between ">
                <span></span>
                <span></span>
                <span></span>

            </button>

            </header>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },

    data() {
        return { 
            isActive: false
        }
    },

    methods: {
        activeMenu() {
            this.isActive = !this.isActive
            console.log("siema")
            console.log(this.isActive)
        }
    }




})
</script>


<style lang="scss">

@import '../styles/GlobalStyles.scss';

header {
    z-index: 100;
    padding: 2rem 1rem;
    margin-right:1rem;
    width: 100vw;
    position: absolute
    
}

.menu {
    height: 100%;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    
        
}



.menu-link {
   
    list-style: none;
    color: white;
    font-size: 2rem;

}


.menu-link.active {
    display: flex;
    justify-content: center;
    width: 10rem;
    background-color: $primary-color;
    border-radius: 50px;
}


.contact-section {

    width: 60%
}

i {
    font-size: 2rem ;
    color: white;

}


.burger {
    width: 3rem;
    height: 2.5rem;
    margin: 1rem;
    position: absolute;
    background-color: transparent;
    top: 10px;
    right: 20px;
    border: none;
    box-shadow: none;
    transition: ease-in 0.5s;
    
}


.burger span {
    width: 100%;
    height: 12%;
    background-color: white;
    border-radius: 40px;

}



.burger.active > span:nth-child(1){
    transform: rotate(-45deg) translateY(1.5rem);
    width: 80%;
}
.burger.active > span:nth-child(2){
    transform: rotate(45deg) translateY(-1.5rem);
    width: 80%;
}
.burger.active > span:nth-child(3){
    display: none;
}


@media only screen and (max-width: 992px){

    header.active {
        height: 100%;
        background-color: black;
    }
    .menu {
        display: none;
        
    }

    .menu.active{
        display: flex;
        height: 80%;
        
    }
    .menu-link.active {
        border: none;
        text-decoration: underline;
        background-color: transparent;
        display: block;
    }

}
</style>