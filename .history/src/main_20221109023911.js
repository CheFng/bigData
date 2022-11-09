import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/styles/index.scss";

import "@UI/styles/ui.scss";

import dataV from "@jiaminghi/data-view";

if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("../mock");
  mockXHR();
}

createApp(App)
  .use(store)
  .use(router)
  .use(dataV)
  .mount("#app");
