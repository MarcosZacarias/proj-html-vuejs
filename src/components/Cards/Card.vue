<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },
  props: {
    cardImage: Object,
    printCardsPhoto: Boolean,
    printCardsPersons: Boolean,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="container-img-bg">
    <div>
      <img :src="cardImage.imgPath" alt="" class="img-bg" />
    </div>
    <div v-if="printCardsPhoto" class="img-hover img-photo-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 85 85"
        class="qodef-eye"
        fill="currentColor"
      >
        <circle cx="42.5" cy="42.5" r="42.5" />
        <path
          d="M57.3 43.2c-.2.3-.4.6-.8 1-.3.4-.9 1-1.9 2-.9.9-1.9 1.7-3 2.4s-2.4 1.3-4.1 1.9c-1.7.6-3.3.8-5.1.8-5.5 0-10.5-2.7-14.8-8-.3-.5-.3-1 0-1.5.2-.3.4-.6.8-1 .3-.4.9-1 1.9-2 .9-.9 1.9-1.7 3-2.4s2.4-1.3 4.1-1.9c1.7-.6 3.3-.8 5.1-.8 1.7 0 3.4.3 5.1.8 1.7.6 3 1.2 4.1 1.9 1.1.7 2.1 1.5 3 2.4.9.9 1.6 1.6 1.9 2 .3.4.6.7.8 1 .2.5.2.9-.1 1.4zm-2.7-.7c-.7-.9-1.5-1.7-2.4-2.5-.9-.8-2.3-1.6-4.1-2.5-1.8-.9-3.7-1.3-5.6-1.3-1.9 0-3.8.4-5.6 1.3-1.8.8-3.2 1.7-4.1 2.5-.9.8-1.7 1.6-2.4 2.5.7.9 1.5 1.7 2.4 2.5.9.8 2.3 1.6 4.1 2.5 1.8.9 3.7 1.3 5.6 1.3 4.6-.1 8.6-2.2 12.1-6.3zm-7.8-3.2c.9 1.2 1.2 2.6 1 4-.2 1.5-.9 2.7-2.1 3.6-1.1.7-2.2 1.1-3.3 1.1h-.7c-1.5-.2-2.7-.9-3.6-2.1-.9-1.2-1.2-2.5-1-4 .2-1.5.9-2.6 2.1-3.5 1.2-.9 2.6-1.3 4-1.1 1.5.1 2.7.8 3.6 2zm-.9 3.7c.1-1-.1-1.8-.6-2.6-.5-.7-1.3-1.2-2.3-1.3-.9-.2-1.8 0-2.5.6-.7.5-1.2 1.3-1.3 2.3-.1 1 .1 1.8.6 2.6.5.7 1.3 1.2 2.3 1.3.9.2 1.8 0 2.5-.6s1.1-1.3 1.3-2.3zm-3.3-2.4c-.3.2-.4.5-.4.9s.1.7.4.9c.2.2.5.4.9.4s.7-.1.9-.4c.3-.3.4-.6.4-.9 0-.3-.1-.6-.4-.9-.3-.3-.6-.4-.9-.4s-.7.1-.9.4z"
          fill="white"
        />
      </svg>
    </div>
    <div v-if="printCardsPersons" class="img-hover img-person-hover">
      <div class="data-person">
        <p class="person-name">{{ cardImage.dataPerson.name }}</p>
        <p class="person-job">{{ cardImage.dataPerson.job }}</p>
        <p>
          <span v-for="icon in cardImage.dataPerson.socialIcons" class="px-1">
            <a href="#">
              <font-awesome-icon :icon="['fab', `${icon}`]" />
            </a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-img-bg {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-hover {
  display: none;
  width: 25%;
  height: 25%;
  cursor: pointer;
}

.img-photo-hover {
  color: #d2401e;
}

.img-person-hover {
  padding: 2rem;
  width: 100%;
  height: 100%;
  .data-person {
    color: white;
    background-color: #d2401e;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .person-name {
      text-transform: uppercase;
      font-size: 1.4rem;
    }
    .person-job {
      font-size: 0.8rem;
    }
  }
}

.container-img-bg:hover {
  .img-bg {
    display: none;
  }
}
.container-img-bg:hover {
  .img-hover {
    display: block;
  }
}
</style>
