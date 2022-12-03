import components from "./components";
import globals from "./global";

export default {
  install: (app, options) => {
    /* Global Components register */
    app.use(components);
    /* Global config */
    app.use(globals);

    /*Directives*/
    app.directive("font-size", (el, binding, vnode) => {
      var size = 16;
      switch (binding.arg) {
        case "small":
          size = options.fontSize.small;
          break;
        case "large":
          size = options.fontSize.large;
          break;
        default:
          size = options.fontSize.medium;
          break;
      }
      el.style.fontSize = size + "px";
    });
  },
};
