import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import PrimeVue from "primevue/config";
// @ts-ignore
import Lara from "./presets/Lara";

const app = createApp(App);

app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});

app.mount("#app");
