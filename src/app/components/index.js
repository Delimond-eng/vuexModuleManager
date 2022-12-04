import CardVue from "@/components/card.vue";
import BsModal from "@/components/bs5/bs_modal.vue";

export default {
  install: (app, options) => {
    /* Global Components register */
    app.component("card-vue", CardVue);
    app.component("bs-modal", BsModal);

    /* Global config */
  },
};
