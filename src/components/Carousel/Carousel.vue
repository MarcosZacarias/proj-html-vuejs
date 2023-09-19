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
  <div class="screen-container">
    <img :src="screenImages[0].bgImg" alt="" class="screen-bg-img" />
    <img :src="screenImages[0].img" alt="" class="screen-img" />
  </div>
  <div class="btn btn-primary">next</div>
</template>

<style lang="scss" scoped>
// @use "../../style/partials/mixins" as *;
</style>
