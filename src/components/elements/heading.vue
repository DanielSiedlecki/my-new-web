<template>
  <span class="heading d-flex my-auto mb-2"
    ><a class="custom-color">/&nbsp</a><a><slot></slot></a
  ></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "../../styles/GlobalStyles.scss";
.heading {
  max-height: 20px;
  .custom-color {
    color: $primary-color;
  }
  a {
    font-size: 1.2vmax;
    letter-spacing: 1px;
    color: white;
  }
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 992px) {
    a {
      font-size: 2vmax;
    }
  }
  a:hover {
    color: white;
  }
}
</style>
