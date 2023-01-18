const data = require("./data");
import http from "@/http";
import { Promise } from "core-js";

function fun1() {
  return "Hello world";
}

function fun2() {
  return "Second hello world";
}
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

  runPromises: function () {
    Promise.all([fun1(), fun2()]).then((res) => {
      console.log(res[0]);
      console.log(res[1]);
    });
  },
};

export default api;
