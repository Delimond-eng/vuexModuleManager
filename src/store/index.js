import { createStore } from "vuex";
import userModule from "./modules/users";
import mainModule from "./modules/main";

export default createStore({
    modules: {
      user: userModule,
      main: mainModule
    },
  });