import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import UUID from "vue-uuid";
import axios from "axios";
import datePicker from "vue-bootstrap-datetimepicker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);
Vue.use(Vuetify);
Vue.use(datePicker);
Vue.use(axios);
Vue.use(UUID);
library.add(faUserSecret);

Vue.component("fa", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;


import GAuth from "vue-google-oauth2";
const gauthOption = {
  clientId:
    "152975793561-50ejve7r84tv9ssak9n8jmsdi654mqbu.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
