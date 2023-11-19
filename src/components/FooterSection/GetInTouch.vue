<template>
  <div class="title d-flex flex-row align-items-center gap-1">
    <h1>Get In Touch <i class="fas fa-arrow-right-long"></i></h1>
  </div>
  <div class="row">
    <div class="col-6 d-flex flex-column">
      <span><h2>Email ME:</h2></span>
      <span class="text_icon d-flex flex-row align-items-center"
        ><p>mrSiedlecki@outlook.com</p>
        <i class="fas fa-angle-right"></i
      ></span>
    </div>

    <div class="col-6 d-flex flex-column">
      <span><h2>CALL ME:</h2></span>
      <span class="text_icon d-flex flex-row align-items-center"
        ><p>+48 534 - 166 - 602</p>
        <i class="fas fa-angle-right"></i
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5vmax;
  color: white;
  i {
    color: red;
  }
}

h2 {
  color: white;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 600;
}
.text_icon {
  background: linear-gradient(red, red),
    linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1));
  background-size: 100% 0.3em, 0% 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  p {
    font-size: 1.2rem;
    color: white;
    margin: 0;
  }

  i {
    font-size: 1.7rem;
    color: white;
    align-items: center;
    transition: 0.3s ease-in;
  }
}

.text_icon:hover {
  background-size: 0 0em, 100% 0.1em;

  i {
    margin-left: 2%;
  }
}
</style>
