/*trigger show bs modal*/
const showBsModal = function (name) {
  $(`.${name}`).click();
};
/*end show bs modal*/

/*trigger show offcanvas*/
const showBsDrawer = function (name) {
  $(`.${name}`).click();
};

export default {
  install: (app, options) => {
    /* Global config to show bs modal @param[String nameOfModal]*/
    app.config.globalProperties.$showBsModal = showBsModal;

    /* Global config to show drawer @param[String nameOfOffcanvas] */
    app.config.globalProperties.$showBsDrawer = showBsDrawer;
  },
};
