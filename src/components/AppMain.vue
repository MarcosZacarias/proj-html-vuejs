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
      listOfferts: [
        {
          title: "Specials*",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repellat!",
          offerts: [
            {
              price: "10",
              name: "combo piccolo",
              description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repellat!",
            },
            {
              price: "20",
              name: "combo mezzo",
              description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repellat!",
            },
            {
              price: "30",
              name: "combo grande",
              description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, repellat!",
            },
          ],
        },
      ],
      cardPersons: [
        {
          imgPath: "../../public/img/layout/h1-team-1a-700x700.jpg",
        },
        {
          imgPath: "../../public/img/layout/h1-team-2a.jpg",
        },
        {
          imgPath: "../../public/img/layout/h1-team-3a.jpg",
        },
        {
          imgPath: "../../public/img/layout/h1-team-4a.jpg",
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
    <section class="d-flex">
      <div class="w-50">
        <img src="../../public/img/layout/h1-img-4.jpg" alt="" />
      </div>
      <div class="w-50 d-flex justify-content-center align-items-center">
        <ul>
          <li>{{ listOfferts[0].title }}</li>
          <li class="pb-2">{{ listOfferts[0].description }}</li>
          <li v-for="offert in listOfferts[0].offerts" class="d-flex gap-2">
            <div>&dollar; {{ offert.price }}</div>
            <div>
              <p>{{ offert.name }}</p>
              <p>{{ offert.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- Section image cubism -->
    <section>
      <img src="../../public/img/layout/h3-background-img.jpg" alt="" />
    </section>
    <!-- Section card persons -->
    <section>
      <Listcard :listImages="cardPersons" />
    </section>
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
