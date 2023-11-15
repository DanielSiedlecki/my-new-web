<template>
  <div
    class="container-fluid skills-container d-flex flex-column align-items-center"
  >
    <div class="title d-flex justify-content-start mt-2">
      <span class="description">
        <p><span class="slash">/</span> MY PROJECTS</p>
        <h1>It is my portfolio</h1>
      </span>
    </div>
    <div
      class="icons d-flex justify-content-center justify-content-lg-end gap-3"
    >
      <span
        v-if="leftArrowVisible"
        class="icon-circle d-flex justify-content-center align-items-center"
        ><i
          class="fas fa-angle-left"
          style="color: white"
          @click="scrollLeft"
        ></i
      ></span>
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
    <div class="scrollable-list mt-4" ref="listContainer">
      <ul class="d-flex gap-5 flex-row mt-5" style="list-style: none">
        <li><projectElement></projectElement></li>
        <li><projectElement></projectElement></li>
        <li><projectElement></projectElement></li>
        <li><projectElement></projectElement></li>
        <li><projectElement></projectElement></li>
        <li><projectElement></projectElement></li>
        <li><projectElement></projectElement></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import projectElement from "./MyProjectsSection/projectElement.vue";

export default defineComponent({
  components: { projectElement },
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
    };
  },
  methods: {
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

<style scoped lang="scss">
@import "../styles/GlobalStyles.scss";
.skills-container {
  height: 100%;
  min-height: 120vh;
  background-color: $second-background-color;
  justify-content: center;
  .title {
    width: 80%;
    .description {
      h1 {
        color: white;
        letter-spacing: 1px;
      }
      p {
        color: white;
        font-weight: 600;
        font-size: 24px;
        letter-spacing: 1px;

        .slash {
          color: #081bc1;
        }
      }
    }
  }
  .icons {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-right: 20%;

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
    white-space: nowrap;
    width: 100%;
    height: 100vh;
  }
  .scrollable-list::-webkit-scrollbar {
    size: 0;
  }
}

@media screen and (max-width: 992px) {
  .skills-container {
    .title {
      margin-left: 2%;
      width: 100%;
      .description {
        margin-left: 5%;
        h1 {
          color: white;
          font-size: 28px;
          justify-self: center;
        }
        p {
          color: white;
          font-weight: 600;
          font-size: 16px;

          .slash {
            color: #081bc1;
          }
        }
      }
    }
    .icons {
      order: 3;
      margin: 0;
    }

    .scrollable-list {
      height: 100%;
    }
  }
}
</style>
