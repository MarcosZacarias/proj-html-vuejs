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
  <button class="btn-carousel btn-prev">prev</button>
  <div class="carousel-container">
    <img :src="screenImages[0].bgImg" alt="" class="carousel-bg-img" />
    <img
      v-if="screenImages[0].img"
      :src="screenImages[0].img"
      alt=""
      class="carousel-img"
    />
  </div>
  <button class="btn-carousel btn-next">next</button>
</template>

<style lang="scss" scoped>
@use "../../style/partials/mixins" as *;
</style>
