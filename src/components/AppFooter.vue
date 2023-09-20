<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      locals: {
        titleLocal: "Find Our Restaurans",
        restaurants: [
          {
            address: "1614 E. Bell Rd #104",
            city: "Salerno, AZ 85022",
            telNumber: "(602) 867-1010",
          },
          {
            address: "204 E. Pizzetta Tommaso",
            city: "Sorrento, AZ 85022",
            telNumber: "(358) 867-1010",
          },
          {
            address: "Vale Puglia 54",
            city: "Torre Del Greco, AZ 85022",
            telNumber: "(359) 867-1010",
          },
          {
            address: "Corso Itali AA",
            city: "Naples, AZ 85022",
            telNumber: "(989) 867-1010",
          },
        ],
      },
      workHours: {
        title: "Working Hours",
        weekHours: [
          {
            day: "Monday",
            closed: "Kitchen Closed",
          },
          {
            day: "Tuseday until Friday",
            hours: "9:00 - 22:00",
          },
          {
            day: "Saturday",
            hours: "11am to midnight",
          },
          {
            day: "Saturday",
            hours: "9:00 - 22:00",
          },
        ],
      },
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <footer class="d-flex">
    <div class="w-50">
      <div class="footer-main">
        <div class="d-flex gap-5">
          <div>
            <ul>
              <li>
                <h5>{{ locals.titleLocal }}</h5>
              </li>
              <li v-for="local in locals.restaurants">
                <ul class="my-3">
                  <li>{{ local.address }}</li>
                  <li>{{ local.city }}</li>
                  <li>{{ local.telNumber }}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h5>{{ workHours.title }}</h5>
              </li>
              <li v-for="day in workHours.weekHours">
                <ul class="my-3">
                  <li>{{ day.day }}</li>
                  <li v-if="day.closed">{{ day.closed }}</li>
                  <li>{{ day.hours }}</li>
                </ul>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="w-50">
      <img src="../../public/img/layout/footer-img-1.jpg" alt="" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-main {
  color: #ffffff;

  height: 100%;
  background-image: url("../../public/img/layout/cielostellato.PNG");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
