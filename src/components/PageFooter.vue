<template>
  <div class="container w-100">
    <div class="row">
      <div class="col-6">
        <my-personal-information></my-personal-information>
      </div>
      <div class="col-6">
        <get-in-touch></get-in-touch>
      </div>
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
