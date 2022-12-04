import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import global from "@/app";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(global);
app.mount("#app");
