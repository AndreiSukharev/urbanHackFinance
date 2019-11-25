import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApiClient from "./plugins/apiClient";
import vuetify from "./plugins/vuetify";
import VueSession from "vue-session";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;
Vue.use(ApiClient);
Vue.use(VueSession, { persist: true });
Vue.use(Toasted, { position: "bottom-right" });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
