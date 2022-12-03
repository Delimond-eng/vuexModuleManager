import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import global from "@/app";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(global);
app.mount("#app");
