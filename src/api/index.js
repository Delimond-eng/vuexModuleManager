const data = require("./data");
import http from "@/http";
const api = {
  getAllUsers: function (exec) {
    setTimeout(() => {
      exec(data);
    }, 16);
  },

  fetchPosts: function (exec) {
    http.get("posts").then((post) => {
      exec(post);
    });
  },

  postData: function (data, exec) {
    http.post("posts", data).then((post) => {
      exec(post);
    });
  },
};

export default api;
