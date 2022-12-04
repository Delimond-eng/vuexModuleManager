/*trigger show bs modal*/
const showBsModal = function (id) {
  console.log("modal id:=>" + id);
  $(`.${id}`).click();
};
/*end show bs modal*/

export default {
  install: (app, options) => {
    /* Global config */
    app.config.globalProperties.$showBsModal = showBsModal;
  },
};
