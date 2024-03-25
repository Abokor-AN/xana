import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import router from "./router";

import { i18n } from "./utils/i18n";

import PrimeVue from "primevue/config";
// @ts-ignore
import Lara from "./presets/Lara";

import { createPinia } from "pinia";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});

app.use(i18n);

app.use(createPinia());

app.use(router);

app.mount("#app");
