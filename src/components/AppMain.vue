<script>
import Listcard from "./Cards/Listcard.vue";
import Carousel from "./Carousel/Carousel.vue";
export default {
  data() {
    return {
      jumbotron: [
        {
          bgImg: "../../public/img/layout/h3-rev-img-1.png",
          img: "../../public/img/layout/h3-rev-img-2.png",
        },
        {
          bgImg: "../../public/img/layout/h3-rev-img-3.png",
          img: "../../public/img/layout/h3-rev-img-4.png",
        },
        {
          bgImg: "../../public/img/layout/h3-rev-img-5.png",
          img: "../../public/img/layout/h3-rev-img-6.png",
        },
      ],
      cardImages: [
        {
          imgPath: "../../public/img/layout/h3-img-1.jpg",
        },
        {
          imgPath: "../../public/img/layout/h3-img-2.jpg",
        },
        {
          imgPath: "../../public/img/layout/h3-img-3.jpg",
        },
        {
          imgPath: "../../public/img/layout/h3-img-4.jpg",
        },
      ],
      testimonials: [
        {
          bgImg: "../../public/img/layout/h3-testimonials-bckgrnd.jpg",
          img: "../../public/img/layout/h3-rev-img-2.png",
        },
      ],
    };
  },

  components: {
    Listcard,
    Carousel,
  },
};
</script>

<template>
  <main>
    <!-- Section jumbotron -->
    <section class="jumbotron carousel">
      <Carousel :screenImages="jumbotron" />
    </section>
    <!-- Section card images -->
    <section>
      <Listcard :listImages="cardImages" />
    </section>
    <!-- Section carousel testimonials -->
    <section class="carousel">
      <Carousel :screenImages="testimonials" />
    </section>
    <!-- Section Special Pizza -->
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

main {
  section {
    margin: 1rem 0 1rem 0;
  }
  section.jumbotron {
    background-image: url("../../public/img/layout/cielostellato.PNG");
    background-size: 100vw;
    background-position: bottom;
  }
}
</style>
