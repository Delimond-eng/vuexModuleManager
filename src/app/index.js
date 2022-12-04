import components from "./components";
import globals from "./global";
import styles from "./styles";

export default {
  install: (app, options) => {
    /* Global Components register */
    app.use(components);
    /* Global config */
    app.use(globals);

    /*styles global using*/
    app.use(styles);
  },
};
