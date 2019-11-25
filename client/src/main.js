import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApiClient from "./apiClient";
import vuetify from "./plugins/vuetify";
import VueSession from 'vue-session'

Vue.config.productionTip = false;
Vue.use(ApiClient);
Vue.use(VueSession,{ persist: true });

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
