import CardVue from "@/components/card.vue";
import Bs5Components from "./bs5/bs_components";

export default {
  install: (app, options) => {
    /*using custom bs5 components*/
    app.use(Bs5Components);
    /* Global Components register */
    app.component("card-vue", CardVue);

    /* Global config */
  },
};
