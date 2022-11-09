import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/index.scss";

import "@UI/styles/ui.scss";

import { decoration7, decoration11 } from '@jiaminghi/data-view'; // dataV

import scrollBar from '@/components/scrollBar';
import '@/components/scrollBar/index.scss';

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

createApp(App)
  .use(store)
  .use(router)
  .use(decoration7)
  .use(decoration11)
  .component('scroll-bar', scrollBar)
  .mount("#app");
