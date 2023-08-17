<template>
  <div
    class="eduexp d-flex align-items-center p-5"
    style="top: 5vh; position: relative"
  >
    <div class="row custom-position">
      <div class="col-12 col-lg-6 d-flex justify-content-center">
        <div class="row d-flex gap-4">
          <div class="col-12">
            <span class="ongoing-work d-flex flex-column">
              <span class="header"><heading>Experience</heading></span>
              <span class="title">WEB DEVELOPER</span>
              <span class="company">ZETO-ŚWIDNICA</span>
              <span class="date"> II 2023 - VI 2023 </span>
              <span class="text"
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.</span
              >
              <span
                class="button-with-icon d-flex align-items-center gap-1 justify-content-end m-2" v-if="!visibilityWorkList"
                @click="
                  () => {
                    visibilityWorkList = true;
                  }
                "
                ><a>Show more job history</a><i class="fas fa-angle-down"></i
              ></span>
            </span>
          </div>

          <div class="line border" v-if="visibilityWorkList"></div>
          <div class="col-12" v-if="visibilityWorkList">
            <span class="ongoing-work d-flex flex-column">
              <span class="title">WEB DEVELOPER</span>
              <span class="company">ZETO-ŚWIDNICA</span>
              <span class="date"> II 2023 - VI 2023 </span>
              <span class="text"
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.</span
              >
              <span
                class="button-with-icon d-flex align-items-center gap-1 justify-content-end m-2"
                @click="
                  () => {
                    visibilityWorkList = false;
                  }
                "
                ><a>Hide</a><i class="fas fa-angle-up"></i
              ></span>
            </span>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 d-flex flex-column mx-auto mt-2">
        <span class="header"><heading>Education</heading></span>
        <span class="title">NETWORK ENGINEERING</span>
        <span class="company">WSB MERITUM UNIVERSITY</span>
        <span class="date"> X 2020 - Ongoing </span>
        <span class="text"
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import heading from "./elements/heading.vue";

export default defineComponent({
  components: { heading },
  data() {
    return {
      visibilityWorkList: false,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/GlobalStyles.scss";
.eduexp {
  height: auto;
  width: 100%;

  .title {
    color: white;
    font-weight: 600;
    font-size: 2vmax;
    max-height: 50px;
  }

  .company {
    color: white;
    font-weight: 400;
    font-size: 1.5vmax;
    letter-spacing: 2px;
  }

  .date {
    color: white;
    font-size: 1.5vmax;
  }

  .text {
    color: white;
    max-width: 50%;
    font-size: 1vmax;
    font-weight: 300;
  }

  .button-with-icon {
    font-size: 1vmax;
    color: white; 
    max-width: 60%;

    a {
      font-weight: 500p;
    }
  }

  .button-with-icon:hover {
    color: $primary-color-2;
    cursor: pointer;
  }
}

.custom-position {
  left: 15%;
  position: relative;
}

.line {
    width: 60%;
}

/* Mobile */

@media screen and (max-width:992px) {
    .eduexp{
    .title {
    color: white;
    font-weight: 600;
    font-size: 4vmax;
    max-height: 60px;
  }

  .company {
    color: white;
    font-weight: 400;
    font-size: 1.5vmax;
    letter-spacing: 2px;
  }

  .date {
    color: white;
    font-size: 1.5vmax;
  }

  .text {
    color: white;
    max-width: 70%;
    font-size: 1.5vmax;
    font-weight: 300;
    height: 100%;
  }

  .button-with-icon {
    font-size: 1.5vmax;
    color: white;
    width: 70%;

    a {
      font-weight: 500p;
    }
  }

  .button-with-icon:hover {
    color: $primary-color-2;
    cursor: pointer;
  }
}

.custom-position {
  left: auto;
}

.line {
    width: 100%;
}
}



@media screen and (max-width:576px) {
    .eduexp{
    .title {
    color: white;
    font-weight: 600;
    font-size: 3vmax;
    max-height: 65px;
  }

  .text {
    color: white;
    max-width: 90%;
    font-size: 1.5vmax;
    font-weight: 300;
    height: 100%;
  }

  .button-with-icon {
    width: 100%;
    font-size: 1.8vmax;
  }
}



}





</style>