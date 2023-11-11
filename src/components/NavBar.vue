<template>
  <div class="navbar-container d-flex" :class="{ active: isActive }">
    <span
      class="nav w-100 d-lg-flex flex-column flex-lg-row align-items-center align-items-lg-end justify-content-center justify-content-lg-between"
      :class="{ 'd-flex': isActive }"
    >
      <span class="ms-0 mb-0 mb-2 me-3 ms-lg-3 mb-lg-2 mt-0 mt-lg-2"
        ><img
          src="../assets/Navbar/navbar-logo.png"
          alt="nav_bar_logo"
          style="width: 70%"
      /></span>
      <span class="links d-flex">
        <ul
          class="all-link d-flex flex-column flex-lg-row align-items-center gap-4 me-3 mt-2"
        >
          <router-link to="/home" active-class="menu-link active"
            ><li class="menu-link">Home</li></router-link
          >
          <li class="menu-link">About</li>
          <li class="menu-link">Portfolio</li>
          <li class="menu-link">Skills</li>
          <li class="menu-link">Contact</li>
        </ul>
      </span>
    </span>

    <span
      class="burger d-flex d-lg-none"
      :class="{ active: isActive }"
      @click="activeMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    activeMenu() {
      this.isActive = !this.isActive;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/GlobalStyles.scss";

.navbar-container {
  width: 100%;
  z-index: 100000;
  position: absolute;

  .links {
    .all-link {
      width: 100%;

      .menu-link {
        list-style: none;
        color: white;
        font-size: 1.2rem;
      }

      .menu-link.active {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 2.5rem;
        background-color: $primary-color;
        border-radius: 50px;
      }
    }
  }

  .navbar.mobile.active {
    display: flex;
  }

  .burger {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.3rem;
    background-color: transparent;
    position: absolute;
    right: 20px;
    top: 10px;
    transition: ease-in 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;

    span {
      width: 100%;
      height: 12%;
      background-color: white;
      border-radius: 40px;
    }
  }

  .burger.active > span:nth-child(1) {
    transform: rotate(-45deg) translateY(0.8rem);
    width: 70%;
  }
  .burger.active > span:nth-child(2) {
    transform: rotate(45deg) translateY(-0.9rem);
    width: 70%;
  }
  .burger.active > span:nth-child(3) {
    display: none;
  }
}

@media screen and (max-width: 992px) {
  .nav {
    display: none;
    height: 100%;
  }
  .navbar-container.active {
    background-color: black;
    height: 100vh;
    top: 0;
    position: sticky;

    .all-link {
      .menu-link.active {
        width: auto;
        background-color: transparent;
        text-decoration: underline;
      }
    }
  }
}
</style>
