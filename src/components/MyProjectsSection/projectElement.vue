<template>
  <div class="element-container d-flex flex-column">
    <div class="row align-items-center flex-row d-flex ms-3 mt-3">
      <div class="col-8 title m,">
        <h1>Auth System</h1>
      </div>
      <div class="col-4 icon">
        <div
          class="circle d-flex justify-content-center align-items-center"
          style=""
        >
          <i class="fab fa-node" style="color: white; font-size: 36px"></i>
        </div>
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
.element-container {
  white-space: nowrap;
  min-width: 300px;
  min-height: 350px;
  height: 50vh;
  border-radius: 50px;
  background-color: #1b1f24;

  .description {
    p {
      white-space: normal;
      color: white;
      font-weight: 300;
      letter-spacing: 0.5px;
    }
  }
  .title {
    max-width: 60%;
    white-space: normal;
    color: white;
  }
  h1 {
    font-size: 32px;
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

.element-container:hover {
  transform: scale(1.2);
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .element-container {
    white-space: nowrap;
    background-color: red;
    min-width: 400px;
    height: 50vh;
    border-radius: 50px;
    background-color: #1b1f24;
  }
}
@media screen and (max-width: 576px) {
  .element-container {
    white-space: nowrap;
    background-color: red;
    min-width: 276px;
    height: 50vh;
    border-radius: 50px;
    background-color: #1b1f24;
  }
}
</style>
