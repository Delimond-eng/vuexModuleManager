import components from "./components";
import globals from "./global";

export default {
  install: (app, options) => {
    /* Global Components register */
    app.use(components);
    app.use(globals);
    /* Global config */
  },
};
