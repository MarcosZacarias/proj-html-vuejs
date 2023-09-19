<script>
// import MyComponent from "./components/MyComponent.vue";

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
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <main>
    <section class="jumbotron">
      <div class="btn btn-primary">prev</div>
      <div class="jumbo-container">
        <img :src="jumbotron[0].bgImg" alt="" class="jumbo-bg-img" />
        <img :src="jumbotron[0].img" alt="" class="jumbo-img" />
      </div>
      <div class="btn btn-primary">next</div>
    </section>
    <section></section>
    <section></section>
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
main {
  section.jumbotron {
    // height: 200px;
    width: 100%;

    background-image: url("../../public/img/layout/cielostellato.PNG");
    background-size: 100vw;
    // background-repeat: no-repeat;

    background-position: bottom;

    padding: 1rem 0 3rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .jumbo-container {
      width: 50%;
      margin: auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .jumbo-bg-img {
        position: absolute;
      }
      .jumbo-img {
        width: 35%;
        z-index: 2;
      }
    }
  }
}
</style>
