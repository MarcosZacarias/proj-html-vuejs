<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      logoHeader: "../../public/img/layout/h5-logo-divided-header.png",
      navbarLt: [
        {
          icon: "../../public/img/icons-svg/svg-0.svg",
          text: "home",
        },
        {
          text: "pages",
        },
        {
          text: "menu",
        },
      ],
      navbarRt: [
        {
          icon: "",
          text: "event",
        },
        {
          text: "blog",
        },
        {
          text: "landing",
        },
      ],
      navbarEnd: [
        {
          icon: "../../public/img/icons-svg/svg-1.svg",
          text: "cart",
        },
        {
          icon: "../../public/img/icons-svg/",
          text: "search",
        },
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header>
    <!-- Wrapper -->
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Button -->
      <div>
        <button class="btn-principal">Order online</button>
      </div>

      <!-- Navbar -->
      <nav class="d-flex align-items-center">
        <!-- navbar left -->
        <ul class="nav d-flex gap-2">
          <li v-for="link in navbarLt" class="nav-item d-flex">
            <span v-if="link.icon" class="list-icon">
              <img :src="link.icon" alt="" />
            </span>
            <a href="#">{{ link.text }}</a>
          </li>
        </ul>

        <!-- logo Header -->
        <div class="logo-header">
          <img :src="logoHeader" alt="Logo Header" />
        </div>

        <!-- Navbar rigth -->
        <ul class="nav d-flex gap-3">
          <li v-for="link in navbarRt" class="nav-item">
            <a href="#">{{ link.text }}</a>
          </li>
        </ul>
      </nav>

      <!-- Navbar End -->
      <nav>
        <ul class="nav d-flex gap-3">
          <li v-for="link in navbarEnd" class="nav-item">
            <span class="list-icon">
              <img src="../../public/img/icons-svg/svg-1.svg" alt="" />
            </span>
            <a href="#">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  // background-color: red;
  background-image: url("../../public/img/layout/cielostellato.PNG");
  background-size: auto;

  background-position: bottom;

  padding: 0.5rem;
}

.nav-item {
  color: #ffffff;
  text-transform: uppercase;
}

.logo-header {
  width: 200px;
  margin: 0 2rem 0 2rem;
}

.list-icon {
  display: inline-block;

  width: 2rem;
  margin: 0 0.5rem 0 0.5rem;

  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(78deg)
    brightness(101%) contrast(100%);
}
</style>
