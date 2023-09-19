<script>
import Card from "./Card.vue";
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    listImages: Array,
  },

  components: {
    Card,
  },
};
</script>

<template>
  <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 my-2">
    <Card v-for="image in listImages" class="col" :cardImage="image" />
  </div>
</template>

<style lang="scss" scoped></style>
