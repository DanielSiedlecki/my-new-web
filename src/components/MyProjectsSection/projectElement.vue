<template>
  <div class="element-container d-flex flex-column justify-content-center">
    <div class="row align-items-start flex-column d-flex ms-3 mt-3">
      <div class="col-4 icon mb-3">
        <div
          class="circle d-flex justify-content-center align-items-center"
          style=""
        >
          <i class="fab fa-node" style="color: white; font-size: 36px"></i>
        </div>
      </div>
      <div class="col-8 title">
        <h1>Auth System</h1>
      </div>
    </div>
    <div class="row description ms-3 mt-3">
      <div class="col-10 d-flex">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has.
        </p>
      </div>
    </div>
    <div
      class="row icon-links d-flex align-items-center justify-content-center justify-content-md-end mt-2 me-2 gap-3 gap-md-1"
    >
      <div class="col-3 d-flex justify-content-start">
        <i class="fab fa-github"> CODE</i>
      </div>
      <div class="col-3 d-flex justify-content-start">
        <i class="fas fa-play"> DEMO</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "../../styles/GlobalStyles.scss";

.container {
  width: 100vw;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.element-container {
  white-space: nowrap;
  min-width: 450px;
  min-height: 450px;
  border-radius: 50px;
  background-color: $second-background-color;

  .description {
    p {
      white-space: normal;
      color: white;
      font-weight: 300;
      letter-spacing: 0.5px;
      font-size: 14px;
    }
  }
  .title {
    max-width: 60%;
    white-space: normal;
    color: white;
  }
  h1 {
    font-size: 28px;
    white-space: normal;
  }
  .icon-links {
    color: white;
  }
  .icon-links i:hover {
    color: $primary-color;
    cursor: pointer;
  }
}
.circle {
  height: 64px;
  width: 64px;
  background-color: $primary-color-2;
  border-radius: 64px;
}

@media screen and (max-width: 1200px) {
  .element-container {
    white-space: nowrap;
    min-width: 400px;
    height: 50vh;
    border-radius: 50px;
  }
}
@media screen and (max-width: 576px) {
  .element-container {
    white-space: nowrap;
    min-width: 276px;
    height: 50vh;
    border-radius: 50px;
  }
}
</style>
