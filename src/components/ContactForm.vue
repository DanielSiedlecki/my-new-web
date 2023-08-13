<template>
  

    <div class="contact-form container-fluid d-flex flex-column h-100">
          <div class="title mt-4"><a class="h1">Contact Us</a></div>

          <span>Your name</span>
          <input  class="input" type="text" v-model="your_name"  />

          <span>Your mail</span>
          <input class="input active-input" type="text" v-model="your_mail" @keydown.space.prevent />

          <span>Text</span>
          <textarea class="textarea" v-model="your_text "></textarea>
          <span class="captcha mt-2 ">
            <div class="g-recaptcha-container ">
                <Recaptcha @captchaValidStatus="validCaptchaStatus" ></Recaptcha>
            </div>
          </span>
          <button @click="validationCheck">Send</button>

        
          
        </div>
        

       
        
    


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SendMailService } from '../services/SendMail'
import {validationCaptcha, validationFormLenght, validationMail} from '../scripts/validationForm'
import Recaptcha from './elements/recaptcha.vue'


export default defineComponent({

    components:{ Recaptcha},
    mounted() {
     
        
        
    },

    data() {
        return {
            your_name: '',
            your_mail: '',
            your_text: '',
            validStatus: false,
               
        }
    },

    methods: {
        validCaptchaStatus(response:any) {
            if (response) {
            this.validStatus = true
            }
            else {
            this.validStatus = false
           }
        },

        visibilityToast(response: any) {

            console.log('work')

        },

        validationCheck() {
            const checkstatus = validationFormLenght(this.your_name.length, this.your_mail.length, this.your_text.length)
            const checkmail = validationMail(this.your_mail)

            
            if(!checkmail)  {
                alert("Check your mail format")
            }

            if (!checkstatus) {
                alert("Complete all field")
            }

            if (this.validStatus === false) {
                alert("Incorrect recaptcha")
            }
            else {
                alert("Email has been sent")
                console.log("Sucess")
                this.sendForm()
            }
       

        
        },


        onRecaptchaVerify(response: string) {

            console.log(response)
            console.log(validationCaptcha(response))
        },

        sendForm() {

            const data = {
                "fullname": this.your_name,
                "mail": this.your_mail,
                "text": this.your_text
            }

            const SendMailServices = new SendMailService()

            SendMailServices.create(data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })


        },
    
        
            

        
        },


    


    
    }
)
</script>


<style scoped lang="scss">

    .contact-form {
    height: 100%;
    width: 80%;
    position: relative;
    max-height: 700px;
    max-width: 800px;

    .captcha {
      width: auto;
      align-self: flex-start;
    }

    span {
      font-size: 1.2rem;
    }



    

    .input {
      
      background-color: transparent;
      border: transparent;
      border-bottom: 3px white solid;
      color: white;
      font-size: 1.4rem;
        
    }

    .textarea{
        background-color: transparent;
      border: transparent;
      border-bottom: 3px white solid;
      color: white;
      font-size: 1rem;
      height: 15%;
      
    }

    
    

    button {
      width: 20%;

      align-self: flex-end;
      background: transparent;
      color: white;
      border: none;
      font-size: 2rem;

      
     
    }
    button:hover {
        text-decoration: underline;
      }
     




    @media only screen and (max-width: 500px) {
    .g-recaptcha {
        transform:scale(0.74);
        transform-origin:0 0;
    }
}
  }





  


</style>