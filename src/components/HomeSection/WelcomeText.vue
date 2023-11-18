<template>
  <div class="welcome-text d-flex flex-column">
    <div class="title d-flex flex-column">
      <div class="line"></div>
      <div><h1 class="typingEffect__line1">I'm Daniel, a</h1></div>
      <div><h1 class="typingEffect__line2">Web Developer</h1></div>
    </div>

    <div class="description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </div>

    <div class="circle mt-2" @click="emitVisibilityAboutMe">
      <i class="fas fa-angle-down"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    emitVisibilityAboutMe() {
      this.$emit("visibilityOn", true);
    },
  },
});
</script>

<style lang="scss" scoped>
h1 {
  width: 0;
  margin-right: 5px;
  overflow: hidden;
  border-right: 2px solid transparent;
  white-space: nowrap;
  font-size: 12vmin;
  color: white;
}
.typingEffect__line1 {
  animation: typing 2s steps(30) forwards, blink 1s 3;
}

.typingEffect__line2 {
  animation: typing 2.5s steps(35) 3s forwards, blink 1s 3s 3;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  0%,
  45% {
    border-color: transparent;
  }
  50%,
  100% {
    border-color: white;
  }
}
.welcome-text {
  position: relative;
}

.line {
  height: 2vmin;
  width: 45vw;
  background-color: white;
}

.description {
  font-size: 3vmin;
  max-height: 100%;
  color: rgba($color: white, $alpha: 0.7);
}

.circle {
  width: 64px;
  height: 64px;
  background-color: #081bc1;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 32px;
    color: white;
  }
}

@media screen and (min-width: 992px) {
  .title {
    font-size: 3.2vmax;
    .upper_text {
      font-size: 3.2vmax;
    }
  }

  .line {
    width: 25%;
    height: 1vmin;
  }

  .description {
    font-size: 2vmin;
    width: 70%;
  }

  .circle {
    max-width: 80px;
    max-height: 80px;

    i {
      font-size: 3rem;
    }
  }
  .circle:hover {
    cursor: pointer;
  }
}
</style>
