<template>
  <div class="custom-container d-flex flex-column gap-3">
    <div
      class="title d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start"
    >
      Programming
    </div>
    <span class="" v-for="item in skillList" :key="item">
      <progress-skill-bar
        :skillName="item.name"
        :count="item.count"
      ></progress-skill-bar>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import progressSkillBar from "../elements/progress-skill-bar.vue";

export default defineComponent({
  components: { progressSkillBar },
  setup() {},
  data() {
    return {
      skillList: [
        { name: "HTML, SCSS, JavasScript/TypeScript", count: "98" },
        { name: "Node.js", count: "80" },
        { name: "Vue.js", count: "40" },
        { name: "React.js", count: "50" },
        { name: "C#", count: "60" },
        { name: "APEX, LWC", count: "70" },
        { name: "Python", count: "20" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/GlobalStyles.scss";
.custom-container {
  position: relative;
  width: 100%;
  .title {
    color: white;
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 992px) {
  .custom-container {
    width: 60vw;
  }
}
</style>
