<template>
  <div class="aboutme-container d-flex align-items-center align-items-lg-end ">
    <div
      class="img-photo d-none d-lg-flex justify-content-center align-items-start"
    >
      <img src=".././assets/my-photo-aboutme.png " class="" alt="" />
    </div>

    <div class="text-title d-flex d-lg-block">
      <div
        class="row w-100 custom-position d-flex-align-items-center gap-2 gap-lg-0"
        style="margin: auto"
      >
        
        <div class="col-12 d-flex d-lg-none flex-row justify-content-center"><img src=".././assets/my-photo-aboutme.png " class="" alt="" style="width: 40%;" /></div>
        <div class="col-12 d-flex d-lg-none flex-column justifyt-content-center align-items-center">
            

            
          <span class="title d-flex justify-content-center ">About Me</span>
          <span class="text d-flex justify-content-center">
            <a
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</a
            ></span
          >
          </div>
      
        <div
          class="col- col-lg-6 d-flex flex-column align-items-center align-items-lg-start position-relative left"
        >
          <span class="title w-lg-100 d-flex justify-content-center "> &lt;frontend&gt; </span>

          <span class="text d-flex flex-column align-items-center">
            <a
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</a
            >

            <span class="icons d-flex justify-content-center mt-2">
              <img
                src="../assets/stack_icons/icons8-angular.svg"
                alt="nagular-logo-icons"
              />
              <img
                src="../assets/stack_icons/icons8-js.svg"
                alt="js-logo-icons"
              />
              <img
                src="../assets/stack_icons/icons8-vue-js.svg"
                alt="vue-js-logo-icons"
              />
            </span>
          </span>
        </div>

        <div
          class="col-12 col-lg-6 d-flex flex-column align-items-center align-items-lg-end position-relative right"
        >
          <span class="title d-flex justify-content-center "> &lt;backend&gt; </span>

          <span class="text d-flex align-items-center flex-column">
            <a class="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.</a
            >

            <span class="icons d-flex justify-content-center mt-2 mb-2">
              <img
                class="icon"
                src="../assets/stack_icons/icons8-python.svg"
                alt="python-logo-icons"
              />
              <img
                class="icon"
                src="../assets/stack_icons/icons8-node-js-32.svg"
                alt="node-js-logo-icons"
              />
              <img
                class="icon"
                src="../assets/stack_icons/icons8-c-sharp-logo.svg"
                alt="c-sharp-logo-icons"
              />
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
.aboutme-container {
  background-color: #1b1f24;
  width: 100vw;
  height: 100vh;
  position: relative;
 


  .img-photo {
    width: 100%;
    height: 80%;
  }
  img {
    width: 50%;
    height: 100%;
  }

  .right {
    right: 8%;
  }

  .left {
    left: 10%;
  }

  .text-title {
    position: absolute;
    height: 100%;

    .custom-position {
      top: 20%;
      position: relative;
    }

    @media screen and (max-width: 992px) {
      .custom-position {
        position: static;
      }
    }

    .title {
      font-size: 3vmax;
      color: white;
      width: 40%;
    }

    .text {
      width: 40%;

      a {
        max-width: 80%;
        display: block;
        font-size: 1vmax;
        color: white;
      }

      .icons {
        img {
          width: 3vmax;
          height: 3vmax;
        }
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .aboutme-container {
    position: absolute;
    height: 100%;
    top: 100%;
    

    .text-title {
      height: 100%;
      
      .title {
        width: 100%;
        
      }
      .text {
        width: 100%;
        height: 100%;
        

        a {
          font-size: 0.8rem;
          max-width: 90%;
        }

        .icons {
          img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }

        @media screen and (max-width: 700px) {
          a {
            font-size: 0.7rem;
            max-width: 90%;
          }

          .icons {
            img {
              width: 1.6rem;
              height: 1.6rem;
            }
          }
        }
        @media screen and (max-width: 500px) {
          a {
            font-size: 0.8rem;
            max-width: 90%;
          }

          .icons {
            img {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
        @media screen and (max-width: 300px) {
          a {
            font-size: 0.6rem;
            max-width: 95%;
          }

          .icons {
            img {
              width: 1.4rem;
              height: 1.4rem;
            }
          }
        }
      }
    }
    .right {
      right: auto;
    }
    .left {
      left: auto;
    }
  }
}
</style>
