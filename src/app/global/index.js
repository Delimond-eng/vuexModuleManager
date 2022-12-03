const showAlert = function (msg) {
  alert(msg);
};

export default {
  install: (app, options) => {
    /* Global config */
    app.config.globalProperties.$showAlert = showAlert;
  },
};
