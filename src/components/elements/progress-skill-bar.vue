<template>
  <div class="">
    <div class="title">
      <h1>{{ skillName }}</h1>
    </div>

    <div class="progress-bar">
      <div
        class="progress-bar-count"
        :style="{ '--progress-width': `${count}%` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  props: {
    skillName: {
      type: String,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style lang="scss" scoped>
@keyframes progressAnimationStrike {
  from {
    width: 0;
  }
  to {
    width: var(--progress-width);
  }
}
.custom-container {
  .title {
    h1 {
      font-size: 16px;
      color: white;
    }
  }

  .progress-bar {
    width: 90%;
    height: 13px;
    background-color: #2e0bdb;
    border-radius: 50px;
    position: relative;
    .progress-bar-count {
      position: absolute;
      background-color: #081bc1;
      height: 100%;
      width: var(--progress-width);
      animation: progressAnimationStrike 6s;
    }
  }
}
</style>
