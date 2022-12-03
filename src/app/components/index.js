import cardVue from "@/components/card.vue";

export default {
  install: (app, options) => {
    /* Global Components register */
    app.component("card-vue", cardVue);

    /* Global config */
  },
};
