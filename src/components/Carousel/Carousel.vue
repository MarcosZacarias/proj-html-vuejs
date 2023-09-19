<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    screenImages: Array,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="btn btn-primary">prev</div>
  <div class="carousel-container">
    <img :src="screenImages[0].bgImg" alt="" class="carousel-bg-img" />
    <img
      v-if="screenImages[0].img"
      :src="screenImages[0].img"
      alt=""
      class="carousel-img"
    />
  </div>
  <div class="btn btn-primary">next</div>
</template>

<style lang="scss" scoped>
// @use "../../style/partials/mixins" as *;
</style>
