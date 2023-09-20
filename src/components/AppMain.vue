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
      cardsImages: [
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
      cardsPersons: [
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
      cardsClients: [
        {
          imgPath: "../../public/img/layout/h1-clients-img-1.png",
        },
        {
          imgPath: "../../public/img/layout/h1-clients-img-2.png",
        },
        {
          imgPath: "../../public/img/layout/h1-clients-img-3.png",
        },
        {
          imgPath: "../../public/img/layout/h1-clients-img-4.png",
        },
        {
          imgPath: "../../public/img/layout/h1-clients-img-5.png",
        },
      ],

      product: {
        subtitleProduct: "Choose Your Flavor",
        titleProduct: "The Best Pizza Menu in Town",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam animi architecto eveniet doloribus quod sint?",
        listProducts: [
          {
            img: "../../public/img/layout/h3-product-img-1a-100x100.png",
            name: "Bismarck",
            oldPrice: "50.00",
            price: "30.00",
          },
          {
            img: "../../public/img/layout/h3-product-img-2a-150x150.png",
            name: "Fiori di zucca",
            price: "7.00",
            maxPrice: "50.00",
          },
          {
            img: "../../public/img/layout/h3-product-img-3a-150x150.png",
            name: "Valdostana",
            price: "55.00",
          },
          {
            img: "../../public/img/layout/h3-product-img-4a-150x150.png",
            name: "Pizza Tartufata",
            price: "45.00",
          },
          {
            img: "../../public/img/layout/h3-product-img-5a-150x150.png",
            name: "Francescana",
            price: "25.00",
          },
          {
            img: "../../public/img/layout/h3-product-img-6a-100x100.png",
            name: "Campagnola",
            price: "50.00",
            maxPrice: "95.00",
          },
        ],
      },
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
      <Listcard :listImages="cardsImages" />
    </section>
    <!-- Section carousel testimonials -->
    <section class="carousel">
      <Carousel :screenImages="testimonials" />
    </section>
    <!-- Section Special Product -->
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
      <Listcard :listImages="cardsPersons" />
    </section>
    <!-- Section card clients -->
    <section class="logo-clients">
      <div class="container">
        <div class="row">
          <div v-for="client in cardsClients" class="col">
            <img :src="client.imgPath" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- Section choose Product -->
    <section>
      <div class="text-center title-product">
        <span>{{ product.subtitleProduct }}</span>
        <h4 class="mb-2">{{ product.titleProduct }}</h4>
        <p>{{ product.description }}</p>
      </div>

      <div class="container-fluid">
        <div class="row gap-5">
          <div v-for="product in product.listProducts" class="col">
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
    <section class="d-flex">
      <div class="events">
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
      <div class="w-50">
        <img src="../../public/img/layout/h3-img-5a.jpg" alt="" />
      </div>
    </section>
    <!-- Section book table -->
    <section>
      <div class="container-fluid book-table-bg center">
        <div class="center book-table">
          <div class="input-table">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div>
            <div class="center">For</div>
          </div>
          <div class="input-table">
            <div class="form-group">
              <label class="active" for="dateStandard">Datepicker</label>
              <input
                type="date"
                id="dateStandard"
                name="dateStandard"
                :placeholder="Date.now()"
              />
            </div>
          </div>
          <div>
            <div class="center">At</div>
          </div>

          <div class="input-table">
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div>
            <button class="btn btn-primary">Book a table</button>
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
