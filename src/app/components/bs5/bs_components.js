import BsModal from "@/components/bs5/bs_modal.vue";
import Bsoffcanvas from "@/components/bs5/bs_offcanvas.vue";

export default {
  install: (app, options) => {
    //bs5 modal register
    app.component("bs-modal", BsModal);

    //bs5 offcanvas register
    app.component("bs-offcanvas", Bsoffcanvas);
  },
};
