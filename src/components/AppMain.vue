<script>
import Listcard from "./Cards/Listcard.vue";
import Carousel from "./Carousel/Carousel.vue";
import { mainDataLayout } from "../data/dataStatic";

export default {
  data() {
    return {
      mainDataLayout,
    };
  },

  components: {
    Listcard,
    Carousel,
  },

  created() {
    console.log(mainDataLayout);
  },
};
</script>

<template>
  <main>
    <!-- Section jumbotron -->
    <section class="jumbotron carousel">
      <Carousel :screenImages="mainDataLayout.jumbotron" />
    </section>
    <!-- Section card images -->
    <section>
      <Listcard
        :listImages="mainDataLayout.cardsImages"
        :cardsPhoto="true"
        :cardsPersons="false"
      />
    </section>
    <!-- Section carousel testimonials -->
    <section class="testimonials center">
      <button class="btn-carousel btn-prev">prev</button>
      <div class="carousel-testimonials">
        <p class="quote-icon">
          <font-awesome-icon
            :icon="mainDataLayout.testimonials.quotes[0].quoteIcon"
          />
        </p>

        <p class="quote">"{{ mainDataLayout.testimonials.quotes[0].quote }}"</p>
        <p class="quote-source">
          {{ mainDataLayout.testimonials.quotes[0].source }}
        </p>
      </div>
      <button class="btn-carousel btn-next">next</button>
    </section>
    <!-- Section Special Product -->
    <section class="specials">
      <div class="specials-aside">
        <img src="../../public/img/layout/h1-img-7n.png" alt="" class="" />
      </div>
      <div class="specials-main">
        <ul>
          <li class="special-text">
            {{ mainDataLayout.listOfferts[0].title }}
          </li>
          <li class="pb-2 description">
            {{ mainDataLayout.listOfferts[0].description }}
          </li>
          <li
            v-for="offert in mainDataLayout.listOfferts[0].offerts"
            class="d-flex gap-2"
          >
            <div class="col-1 special-price">&dollar;{{ offert.price }}</div>
            <div>
              <p class="special-text secondary">{{ offert.name }}</p>
              <p class="description">{{ offert.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- Section image all-screen -->
    <section class="img-all-screen center">
      <div class="container">
        <p>{{ mainDataLayout.imgAllScreen.quote }}</p>
      </div>
    </section>
    <!-- Section card persons -->
    <section>
      <Listcard
        :listImages="mainDataLayout.cardsPersons"
        :cardPhoto="false"
        :cardsPersons="true"
      />
    </section>
    <!-- Section card clients -->
    <section class="logo-clients">
      <div class="container">
        <div class="row">
          <div v-for="client in mainDataLayout.cardsClients" class="col">
            <img :src="client.imgPath" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- Section choose Product -->
    <section>
      <div class="text-center title-product">
        <span>{{ mainDataLayout.product.subtitleProduct }}</span>
        <h4 class="mb-2">{{ mainDataLayout.product.titleProduct }}</h4>
        <p>{{ mainDataLayout.product.description }}</p>
      </div>

      <div class="container-fluid">
        <div class="row gap-5">
          <div
            v-for="product in mainDataLayout.product.listProducts"
            class="col"
          >
            <div class="card-product">
              <div class="card-media">
                <img :src="product.img" alt="" />
              </div>
              <div class="card-text center-column">
                <p>{{ product.name }}</p>
                <p class="prices">
                  <span v-if="product.oldPrice" class="old-price"
                    >&dollar; {{ product.oldPrice }}
                  </span>
                  <span v-if="product.price" class="normal-price">
                    &dollar; {{ product.price }}
                  </span>
                  <span v-if="product.maxPrice" class="max-price">
                    - &dollar; {{ product.maxPrice }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section events -->
    <section class="events">
      <div class="events-main">
        <ul>
          <li class="events-text smaller">
            {{ mainDataLayout.event.subtitleEvent }}
          </li>
          <li class="events-text mb-2">{{ mainDataLayout.event.title }}</li>
          <li v-for="event in mainDataLayout.event.programEvents" class="event">
            <div class="col-1">
              <p class="events-date">
                {{ event.dayEvent }}
              </p>
              <p class="events-text secondary">
                {{ event.monthEvent }}
              </p>
            </div>
            <div>
              <p class="events-text secondary">{{ event.nameEvent }}</p>
              <p class="events-text smaller text-capitalize">
                <span v-if="event.iconAddress">
                  <font-awesome-icon :icon="event.iconAddress" />
                </span>
                {{ event.addressEvent }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="events-aside"></div>
    </section>
    <!-- Section book table -->
    <section>
      <div class="container-fluid book-table-bg center">
        <div class="center book-table">
          <div class="input-table input-persons">
            <select class="form-select" aria-label="Default select example">
              <option
                v-for="n in mainDataLayout.bookTable.persons.maxPerson"
                :value="n"
              >
                {{ n }} Persons
              </option>
            </select>
            <span class="pe-1">
              <font-awesome-icon :icon="['fas', 'user-group']" />
            </span>
          </div>
          <div>
            <div class="center">For</div>
          </div>
          <div class="input-table gap-1">
            <div>11/29/2020</div>
            <span>
              <font-awesome-icon :icon="['fas', 'calendar-days']" />
            </span>
          </div>
          <div>
            <div class="center">At</div>
          </div>

          <div class="input-table">
            <select class="form-select" aria-label="Default select example">
              <option
                v-for="hour in mainDataLayout.bookTable.hours"
                :value="hour"
              >
                {{ hour }}
              </option>
            </select>
            <span class="pe-1">
              <font-awesome-icon :icon="['fas', 'clock']" />
            </span>
          </div>

          <div>
            <button class="btn-principal">Book a table</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

main {
  section {
    margin: 1rem 0;
  }
  section.jumbotron {
    background-image: url("../../public/img/layout/cielostellato.PNG");
    background-size: 100vw;
    background-position: bottom;
    margin: 0;
  }
}

.logo-clients {
  background-color: #f7f7f2;
  padding: 4rem 0;
}
</style>
