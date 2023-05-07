import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./plugins/router";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa-svg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./icons"
import { mdi } from "vuetify/iconsets/mdi";

const app = createApp(App);

const vuetify = createVuetify({
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
      mdi,
    },
  },
});

app.use(router);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(vuetify);

app.mount("#app");
