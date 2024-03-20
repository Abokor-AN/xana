import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
// @ts-ignore
import Lara from "./presets/Lara";

import { createPinia } from "pinia";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});

app.use(createPinia());

app.use(router);

app.mount("#app");
