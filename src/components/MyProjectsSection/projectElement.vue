<template>
  <div class="element-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style lang="scss" scoped>
.element-container {
  white-space: nowrap;
  min-width: 400px;
  min-height: 400px;
  height: 60vh;

  border-radius: 50px;

  background-color: #1b1f24;
}
</style>
