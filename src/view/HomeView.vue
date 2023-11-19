<template>
  <div class="view-container">
    <home @visibilityEmit="scrollTo($refs.aboutMe, true, false)"></home>
    <div ref="aboutMe">
      <about-me
        v-if="aboutMeVisibility"
        @visibilityEmit="scrollTo($refs.ExpEdu, true, true)"
      ></about-me>
    </div>
    <div ref="ExpEdu">
      <edu-exp v-if="expEduVisibility"></edu-exp>
    </div>

    <skills v-if="!aboutMeVisibility"></skills>
    <my-projects></my-projects>

    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMe from "../components/AboutMe.vue";
import Home from "../components/Home.vue";
import EduExp from "../components/EduExp.vue";
import Skills from "../components/Skills.vue";
import MyProjects from "../components/MyProjects.vue";
import PageFooter from "@/components/PageFooter.vue";

export default defineComponent({
  components: { Home, AboutMe, EduExp, Skills, MyProjects, PageFooter },
  data() {
    return {
      aboutMeVisibility: false,
      expEduVisibility: false,
    };
  },
  methods: {
    scrollTo(section: any, aboutMe: boolean, expEdu: boolean) {
      this.aboutMeVisibility = aboutMe;
      this.expEduVisibility = expEdu;
      this.$nextTick(() => {
        const aboutMeRef = section as HTMLElement;
        if (aboutMeRef) {
          aboutMeRef.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
});
</script>

<style lang="scss">
.view-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
}
</style>
