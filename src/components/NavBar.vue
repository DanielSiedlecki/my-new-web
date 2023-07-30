<template>

    <header >

        <div class="logo">
           
            
        </div>
    <ul class="menu d-flex flex-column justify-content-center align-items-center">
        <li class="menu-link">Home</li>
        <li class="menu-link">About</li>
        <li class="menu-link">Portfolio</li>
        <li class="menu-link">Contact</li>
        <li class="menu-link">Other</li>


        <div class="contanct-section">
            <i class="bi bi-linkedin"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-github"></i>
            <i class="fas fa-envelope"></i>
            <i class="fas fa-phone"></i>



        </div>
        




    </ul>

    <button class="burger d-flex flex-column justify-content-between ">
                <span></span>
                <span></span>
                <span></span>

            </button>

            </header>
</template>



<style lang="scss">

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem;
}

.menu {
    position: absolute;
    min-height: 100vh;
    min-width: 100vw;
    background-color: black;
    top: 0;
    left: 0;
    
}


.menu-link {

    list-style: none;
    color: white;
    font-size: 2rem;

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
    
}


.burger span {
    width: 100%;
    height: 12%;
    background-color: white;
    border-radius: 40px;

}


</style>