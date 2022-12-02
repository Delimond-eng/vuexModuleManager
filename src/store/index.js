import { createStore } from "vuex";
import mainModule from "./modules/main";

export default createStore({
  modules: {
    main: mainModule,
  },
});
