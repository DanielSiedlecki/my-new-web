<template>
  <div class="cont d-flex flex-column">
    <div class="container mb-2 d-flex flex-column mt-5">
      <span
        class="d-flex justify-content-center justify-content-lg-start custom-width"
        ><heading>My projects</heading></span
      >
    </div>
    <div
      class="icons d-flex justify-content-center justify-content-lg-end gap-3 pe-0 pb-2 pb-lg-0 pe-lg-3"
    >
      <span
        v-if="leftArrowVisible"
        class="icon-circle d-flex justify-content-center align-items-center"
      >
        <i
          class="fas fa-angle-left"
          style="color: white"
          @click="scrollLeft"
        ></i>
      </span>
      <span
        v-if="rightArrowVisible"
        class="icon-circle d-flex justify-content-center align-items-center"
      >
        <i
          class="fas fa-angle-right"
          style="color: white"
          @click="scrollRight"
        ></i>
      </span>
    </div>
    <div
      class="scrollable-list"
      style="margin: 0; padding: 0"
      ref="listContainer"
    >
      <ul
        class="d-flex gap-5 flex-row mt-5 mb-5"
        style="list-style: none"
        :class="{
          mg_left: !leftArrowVisible,
          'mg_left-off': leftArrowVisible,
        }"
      >
        <li
          v-for="(item, index) in projectElemenetList"
          :key="index"
          @mouseover="hoverElementEffect(index)"
          @mouseleave="resetElementEffect()"
        >
          <projectElement
            :class="{
              highlighted: index === hoveredIndex,
              'not-highlighted': index !== hoveredIndex && hoveredEffect,
              'not-highlighted-off': !hoveredEffect,
            }"
          ></projectElement>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./elements/heading.vue";
import projectElement from "./MyProjectsSection/projectElement.vue";

export default defineComponent({
  components: { projectElement, Heading },
  mounted() {
    (this.$refs.listContainer as HTMLElement).addEventListener(
      "scroll",
      this.handleScroll
    );
  },
  data() {
    return {
      leftArrowVisible: false,
      rightArrowVisible: true,
      listContainer: this.$refs.listContainer as HTMLElement,
      projectElemenetList: [1, 2, 3, 4, 5, 6, 7],
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
    handleScroll() {
      const listContainer = this.$refs.listContainer as HTMLElement;
      if (
        listContainer.scrollLeft + listContainer.clientWidth >=
        listContainer.clientWidth
      ) {
        this.leftArrowVisible = true;
        this.rightArrowVisible = true;
      }
      if (
        listContainer.scrollLeft + listContainer.clientWidth >=
        listContainer.scrollWidth - 1
      ) {
        this.rightArrowVisible = false;
        this.leftArrowVisible = true;
      }
      if (
        listContainer.scrollLeft + listContainer.scrollWidth ===
        listContainer.scrollWidth
      ) {
        this.leftArrowVisible = false;
        this.rightArrowVisible = true;
      }
    },
    scrollRight() {
      const listContainer = this.$refs.listContainer as HTMLElement;
      listContainer.scrollTo({
        left: listContainer.scrollLeft + 100,
        behavior: "smooth",
      });
    },
    scrollLeft() {
      const listContainer = this.$refs.listContainer as HTMLElement;
      listContainer.scrollTo({
        left: listContainer.scrollLeft - 100,
        behavior: "smooth",
      });
    },
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
.icons {
  width: 100%;
  justify-content: center;
  align-items: center;

  .icon-circle {
    background-color: #081bc1;
    height: 4rem;
    width: 4rem;
    border-radius: 64px;

    i {
      font-size: 2.5rem;
    }
    i:hover {
      cursor: pointer;
    }
  }
}

.scrollable-list {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
}
.scrollable-list::-webkit-scrollbar {
  width: 0px;
}
.mg_left {
  margin-left: 15%;
  transition: 0.3s ease-in;
}
.mg_left-off {
  margin-left: 0%;
  transition: 0.3s ease-in;
}

@media screen and (max-width: 992px) {
  .icons {
    order: 3;
    margin: 0;
  }
  .mg_left {
    margin-left: 0%;
  }
  .scrollable-list {
    height: 100%;
  }
}
</style>
