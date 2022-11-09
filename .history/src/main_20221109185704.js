import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/index.scss";

import "@UI/styles/ui.scss";

import { decoration7, decoration11 } from '@jiaminghi/data-view'; // dataV
Vue.use(decoration7);
Vue.use(decoration11);

import scrollBar from '@/components/scrollBar';
import '@/components/scrollBar/index.scss';
Vue.component('scroll-bar', scrollBar);

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');