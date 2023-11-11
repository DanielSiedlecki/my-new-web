<template>
  <div class="custom-container" style="background-color: #1b1f24">
    <div class="background-image"></div>

    <div class="information">
      <div class="row h-100" style="margin: auto">
        <div class="col-sm-12 col-lg-6 d-flex align-items-center">
          <welcome-text
            @visibilityOn="emitHomeOn"
            class="d-flex ps-3"
          ></welcome-text>
        </div>
        <div class="col-6 d-none d-lg-flex h-100 align-items-center">
          <div
            class="row d-none d-lg-flex flex-column d-flex justify-content-around align-items-end me-5"
            style="height: 60%"
          >
            <div class="col-6">
              <ExperienceAboutMe>
                <template #title>My Experience</template>
                <template #text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has.
                </template>
              </ExperienceAboutMe>
            </div>
            <div class="col-6">
              <ExperienceAboutMe>
                <template #title> About Me</template>
                <template #text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has.
                </template>
              </ExperienceAboutMe>
            </div>

            <div class="col-6 position-relative">
              <div class="social-media-bar d-none d-lg-flex flex-column">
                <span class="text"><a>Social & Contact</a></span>
                <span class="icons mt-2">
                  <i class="fab fa-linkedin"></i>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-github"></i>
                  <i class="fas fa-envelope"></i>
                  <i class="fas fa-phone"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ExperienceAboutMe from "./HomeSection/Experience&AboutMe.vue";
import WelcomeText from "./HomeSection/WelcomeText.vue";

export default defineComponent({
  components: { WelcomeText, ExperienceAboutMe },

  methods: {
    emitHomeOn() {
      this.$emit("visibilityEmit", true);
    },
  },
});
</script>

<style lang="scss" scoped>
.custom-container {
  width: 100vw;
  height: 100vh;

  .background-image {
    background-image: url("../assets/Home_elements/background-photo.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 30% auto;
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

  @media screen and (max-width: 1371px) {
    .background-image {
      background-size: 50% auto;
    }
  }
  @media screen and (max-width: 993px) {
    .background-image {
      background-position: center bottom;
      background-size: 50% auto;
    }
  }
  @media screen and (max-width: 900px) {
    .background-image {
      background-position: center bottom;
      background-size: 70% auto;
    }
  }

  .social-media-bar {
    .text {
      a {
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
        color: white;
      }
    }

    .icons {
      width: 60%;
      display: flex;
      gap: 1.2rem;
      align-items: start;

      i {
        font-size: 1.8rem;
        color: white;
      }

      i:hover {
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
        cursor: pointer;
      }
    }
  }

  .information {
    height: 100%;
  }
}
</style>
