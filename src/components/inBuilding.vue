<template>
    
<div class="inBuilding-container d-flex flex-column justify-content-center align-items-center ">

    <span class="text-title d-flex flex-column align-items-center "><h1>Website in Building</h1><a>please come back later</a>

    </span>
 

    <div class="contact-form d-flex flex-column w-50 h-50" >

        <div class="title mt-4"><a class="h1">Contact Us</a></div>
        
        
       
        <span >Your name</span>
        <input>
        
        <span>Your mail</span>
        <input>
       
        <span>Text</span>
        <textarea></textarea>
        
        <button>Send</button>


    </div>





</div>





</template>


<style lang="scss" scoped>

    .inBuilding-container{
        background-color: black;
        width: 100vw;
        height: 100vh;

        .contact-form {
            span {

                font-size: 1.5rem;
                
            }

            input {
                background-color: transparent;
                border: transparent;
                border-bottom: 3px white solid ;
                color: white;
                font-size: 2rem;

               
            }

            textarea{
                height: 100%;
               
                background-color: transparent;
                border: transparent;
                border-bottom: 3px white solid ;
                color: white;
                font-size: 1rem;

            }
        



            button {
                width: 20%;
                margin-top: 0.8rem;
                align-self: flex-end;
                background: transparent;
                color: white;
                border: none;
                font-size: 2rem;
            }
        }
    }



</style>