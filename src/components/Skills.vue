<template>
  <div class="container mb-2">
    <span
      class="d-flex justify-content-center justify-content-lg-start custom-width"
      ><heading>Skills</heading></span
    >
    <div class="row">
      <div
        class="col-12 col-lg-7 d-flex justify-content-center justify-content-lg-end"
      >
        <programming-window></programming-window>
      </div>
      <div
        class="col-12 col-lg-5 d-flex flex-column gap-4 align-items-center align-items-lg-start justify-content-center mt-2"
      >
        <div v-for="item in iconList" :key="item.name">
          <other-sills-window
            :sectionName="item.name"
            :iconListProp="item.list"
          ></other-sills-window>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./elements/heading.vue";
import OtherSillsWindow from "./SkillsSection/OtherSillsWindow.vue";
import ProgrammingWindow from "./SkillsSection/ProgrammingWindow.vue";
interface SkillItem {
  name: string;
  list: string[];
}

interface ComponentData {
  iconList: SkillItem[];
}
export default defineComponent({
  components: { ProgrammingWindow, OtherSillsWindow, Heading },
  setup() {},
  data(): ComponentData {
    return {
      iconList: [
        { name: "Database", list: ["my-icon-mongoDb", "my-icon-sql"] },
        { name: "Graphics", list: ["my-icon-figma", "my-icon-adobePhotoshop"] },
        {
          name: "Administration",
          list: [
            "my-icon-msWindowsServer",
            "my-icon-msExcel",
            "my-icon-salesforce",
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
