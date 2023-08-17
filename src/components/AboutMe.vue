<template>
  <div
    class="about-me-container d-flex align-items-center align-items-lg-start"
  >
    <div
      class="row d-flex justify-content-center flex-column-reverse flex-lg-row align-items-center align-items-lg-start"
    >
      <div
        class="col-12 col-lg-7 custom-width d-flex flex-column custom-position"
      >
        <span class="heading"><heading>About Me</heading></span>
        <span class="title">I’ ve been developing websites since 2023</span>
        <span class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.</span
        >

        <span class="button-more d-flex justify-content-end"
          ><span class="d-flex flex-column"
            ><h1>More About Me</h1>
            <div class="line"></div></span
        ></span>
      </div>

      <div class="col-12 col-lg-5 custom-img-position mb-2 align-items-center">
        <img
          src="../assets/AboutMe_elements/about-me-code.jpg"
          alt="photo-code-background"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import heading from "./elements/heading.vue";
export default defineComponent({
  components: { heading },
});
</script>

<style lang="scss" scoped>
@import "../styles/GlobalStyles.scss";
.about-me-container {
  background-color: $second-background-color;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.title {
  font-size: 3vmax;
  color: white;
  width: 80%;
}

.text {
  color: white;
  max-width: 70%;
  font-size: 1vmax;
}

.button-more {
  max-width: 70%;
  h1 {
    color: white;
    font-size: 1.2vmax;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: white;
  }
}

.button-more:hover {
  cursor: pointer;
}

.custom-width {
  max-width: 40%;
}

.custom-position {
  position: relative;
  top: 10vh;
  left: 10vh;
}

.custom-img-position {
  position: relative;
  top: 40vh;
}

img {
  width: 100%;
  height: 70vh;
  border-radius: 40px;
}

/* mobile */

@media (max-width: 992px) {
  .title {
    font-size: 3.5vmax;
    color: white;
    width: 100%;
    max-width: 800px;
  }

  .text {
    color: white;
    max-width: 100%;
    font-size: 2vmax;
  }

  .button-more {
    max-width: 100%;
    h1 {
      color: white;
      font-size: 1.6vmax;
    }

    .line {
      width: 100%;
      height: 2px;
      background-color: white;
    }
  }

  .button-more:hover {
    cursor: pointer;
  }

  .custom-width {
    max-width: 80%;
  }

  .custom-position {
    top: auto;
    left: auto;
  }

  .custom-img-position {
    top: 10%;
    right: 10%;
    height: auto;
  }

  img {
    width: 70%;
    max-width: 200px;
    height: 100%;
    
  }
}
</style>
