<template>
  <div class="line mt-5"></div>
  <div class="container-fluid container-lg cont-border d-flex">
    <div class="d-flex flex-column flex-lg-row w-100 gap-4 mt-5 mb-5">
      <my-personal-information></my-personal-information>

      <get-in-touch></get-in-touch>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetInTouch from "./FooterSection/GetInTouch.vue";
import MyPersonalInformation from "./FooterSection/MyPersonalInformation.vue";

export default defineComponent({
  components: { MyPersonalInformation, GetInTouch },
  setup() {},
});
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  border-top: 1px solid #8895aa;
}
.cont-border {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
