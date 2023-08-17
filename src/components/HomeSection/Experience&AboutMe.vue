<template>
  <div class="bar d-flex flex-column mb-3 mb-3">
    <span class="title">
      <h1><slot name="title"></slot></h1>
    </span>
    <span class="text mt-2"
      ><a><slot name="text"></slot></a
    ></span>

    <span class="learn-more-buttom mt-2">
      <a class="buttom-text">LEARN MORE</a>
      <span class="custom-underline"></span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/GlobalStyles.scss";
.bar {
  position: relative;
}
.title h1 {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
}

.text {
  color: white;
  font-weight: 300;
  width: 100%;
  font-size: 0.8rem;
}

.learn-more-buttom {
  display: flex;
  flex-direction: column;
  width: 7rem;
  justify-content: center;

  .buttom-text {
    color: white;
    font-size: 1rem;
  }

  .custom-underline {
    height: 2px;
    background-color: white;
    width: 90%;
    border-radius: 20px;
  }
}

.learn-more-buttom:hover {
  .buttom-text {
    cursor: pointer;
    color: $primary-color-2;
  }
  .custom-underline {
    background-color: $primary-color-2;
  }
}
</style>
