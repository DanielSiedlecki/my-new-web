<template>
  <div
    class="custom-container d-flex flex-column justify-content-center align-items-center justify-content-lg-start align-items-lg-start"
  >
    <div class="title mt-2">{{ sectionName }}</div>
    <div
      class="skill-contaier d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start"
    >
      <div
        class="skill d-flex flex-row gap-2"
        v-for="item in iconListProp"
        :key="item"
      >
        <i :class="item" style="width: 64px; height: 64px"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  props: {
    iconListProp: {
      type: Array,
    },
    sectionName: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/GlobalStyles.scss";
.my-icon-sql {
  background: url(../../assets/stack_icons/icons8-sql-64.png) no-repeat;
  transform: scale(0.8);
}
.my-icon-mongoDb {
  background: url(../../assets/stack_icons/icons8-mongodb-64.png) no-repeat;
  transform: scale(0.8);
}
.my-icon-adobePhotoshop {
  background: url(../../assets/stack_icons/icons8-adobe-photoshop-64.png)
    no-repeat;
  transform: scale(0.8);
}
.my-icon-figma {
  background: url(../../assets/stack_icons/icons8-figma-64.png) no-repeat;
  transform: scale(0.8);
}
.my-icon-msWindowsServer {
  background: url(../../assets/stack_icons/icons8-server-windows-64.png)
    no-repeat;
  transform: scale(0.8);
}
.my-icon-msExcel {
  background: url(../../assets/stack_icons/icons8-excel-64.png) no-repeat;
  transform: scale(0.8);
}
.my-icon-salesforce {
  background: url(../../assets/stack_icons/icons8-salesforce-64.png) no-repeat;
  transform: scale(0.8);
}
.custom-container {
  height: 20vh;
  .title {
    color: white;
    font-size: 20px;
  }
  .skill-contaier {
    width: 100%;
    height: 15vh;

    .skill {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
