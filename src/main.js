import { createApp } from "vue";

import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style/general.scss";

import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
