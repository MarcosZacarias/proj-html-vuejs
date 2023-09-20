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
            day: "Tuesday until Friday",
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
      socials: {
        title: "Follow Us",
        socialIcons: ["twitter", "facebook-f", "instagram", "linkedin-in"],
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
    <div class="footer-main">
      <div class="footer-top">
        <!-- Locals -->
        <div>
          <!-- Restaurants -->
          <ul>
            <!-- Title -->
            <li>
              <h5 class="footer-title">{{ locals.titleLocal }}</h5>
            </li>
            <!-- Address locals -->
            <li v-for="local in locals.restaurants">
              <ul class="my-3 footer-text">
                <li>{{ local.address }}</li>
                <li>{{ local.city }}</li>
                <li>{{ local.telNumber }}</li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- Timetables and Socials -->
        <div>
          <!-- Timetables -->
          <ul>
            <!-- Timetables Title -->
            <li>
              <h5 class="footer-title">{{ workHours.title }}</h5>
            </li>
            <!-- Day Hours -->
            <li v-for="day in workHours.weekHours">
              <ul class="my-3 footer-text">
                <li>{{ day.day }}</li>
                <li v-if="day.closed">{{ day.closed }}</li>
                <li>{{ day.hours }}</li>
              </ul>
            </li>
          </ul>
          <!-- Socials -->
          <div>
            <!-- Title social -->
            <span class="footer-title"> {{ socials.title }}: </span>
            <!-- Icons -->
            <span v-for="icon in socials.socialIcons" class="px-1">
              <a href="#">
                <font-awesome-icon :icon="['fab', `${icon}`]" />
              </a>
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div class="footer-bottom">
        <div>
          <span>Created with &hearts; .by <span>Qode Interactive</span></span>
        </div>
        <div>
          <img src="../../public/img/layout/footer-bottom-img.png" alt="" />
        </div>
      </div>
    </div>

    <div class="footer-img-bg"></div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-main {
  color: #ffffff;
  width: 50%;

  padding: 5rem 1rem 2rem 1rem;

  height: 100%;
  background-image: url("../../public/img/layout/cielostellato.PNG");
  background-repeat: no-repeat;
  background-size: cover;

  .footer-top {
    display: flex;
    justify-content: space-around;
    padding-bottom: 1rem;
    > div {
      width: calc(90% / 3);
    }
    .footer-title {
      color: #b48d3a;
      font-size: medium;
      font-weight: bold;
      text-transform: uppercase;
    }
    .footer-text {
      color: rgb(172, 172, 172);
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 0 1rem;
  }
}
.footer-img-bg {
  width: 50%;
  background-image: url("../../public/img/layout/footer-img-1.jpg");
  background-position: center;
  background-size: cover;
}
</style>
