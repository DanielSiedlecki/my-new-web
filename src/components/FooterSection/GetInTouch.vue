<template>
  <div class="container">
    <div class="title d-flex flex-row align-items-center mb-3">
      <h1>Get In Touch <i class="fas fa-arrow-right-long"></i></h1>
    </div>
    <div class="row gap-2">
      <div class="d-flex col-12 col-lg-6 flex-column gap-1" style="width: auto">
        <span><h2>Email ME:</h2></span>
        <span class="text_icon d-flex flex-row align-items-center gap-1"
          ><p>mrSiedlecki@outlook.com</p>
          <i class="fas fa-angle-right"></i
        ></span>
      </div>

      <div class="d-flex col-12 col-lg-6 flex-column gap-1" style="width: auto">
        <span><h2>CALL ME:</h2></span>
        <span class="text_icon"
          ><span class="line d-flex flex-row align-items-center gap-1"
            ><p>+48 534 166 602</p>
            <i class="fas fa-angle-right"></i></span
        ></span>
      </div>
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
@import "../../styles/GlobalStyles.scss";
.title:hover {
  cursor: pointer;
  h1 {
    i {
      margin-left: 10px;
      transition: 0.3s ease-in;
    }
  }
}
h1 {
  font-size: 2rem;
  color: white;
  i {
    color: $primary-color;
    filter: brightness(120%);
  }
}

h2 {
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
}
.text_icon {
  background: linear-gradient(#8895aa, #8895aa),
    linear-gradient(to right, white, white);
  background-size: 100% 0.3em, 0% 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  p {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 10px;
    font-weight: 600;
  }

  i {
    font-size: 1.7rem;
    color: white;
    align-items: center;
    transition: 0.3s ease-in;
    margin-bottom: 10px;
  }
}

.text_icon:hover {
  background-size: 0 0em, 100% 0.3em;
  cursor: pointer;

  i {
    margin-left: 5px;
  }
}
</style>
