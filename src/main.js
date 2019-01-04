import Vue from "vue";
import App from "./App.vue";
import InstantSearch from "vue-instantsearch";

Vue.config.productionTip = false;
Vue.use(InstantSearch);

new Vue({
  render: h => h(App)
}).$mount("#app");
