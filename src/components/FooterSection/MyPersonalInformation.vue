<template>
  <div class="container">
    <div class="row d-flex flex-column gap-3">
      <div class="row d-flex align-items-center">
        <div class="col-4 col-lg-5 col-xl-3 text-center ma">
          <img
            src="../../assets/Footer_elements/myPicture.png"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-8 col-lg-7 col-xl-9 gap-3">
          <span class="title"><h1>Daniel Siedlecki</h1></span>
          <span class="job_name"
            ><h2 class="mt-2">Beginner Web Developer</h2></span
          >
        </div>
      </div>
      <div class="col-12 mt-3">
        <span class="icons d-flex gap-4 mb-2">
          <i
            v-for="(item, index) in iconsList"
            :key="index"
            :class="{
              highlighted: index === hoveredIndex,
              'not-highlighted': index !== hoveredIndex && hoveredEffect,
              'not-highlighted-off': !hoveredEffect,
              [item]: true,
            }"
            @mouseover="hoverElementEffect(index)"
            @mouseleave="resetElementEffect()"
          ></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      iconsList: ["fab fa-linkedin", "fab fa-facebook", "fab fa-github"],
      hoveredIndex: null,
      hoveredEffect: false,
    };
  },
  methods: {
    hoverElementEffect(index: any) {
      this.hoveredIndex = index;
      this.hoveredEffect = true;
    },
    resetElementEffect() {
      this.hoveredIndex = null;
      this.hoveredEffect = false;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/GlobalStyles.scss";
img {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: $second-background-color;
  position: relative;
}

.title {
  h1 {
    font-size: 2rem;
    color: white;
    letter-spacing: 0.2px;
  }
}

.job_name {
  h2 {
    font-size: 1.1rem;
    color: #8895aa;
    font-weight: 400;
  }
}

.icons {
  i {
    font-size: 2rem;
    color: white;
  }
}

@media screen and (max-width: 576px) {
  img {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
  .title {
    h1 {
      font-size: 1.5rem;
      color: white;
      letter-spacing: 0.2px;
    }
  }
  .job_name {
    h2 {
      font-size: 1.2rem;
      color: #8895aa;
      font-weight: 400;
    }
  }
}
</style>
