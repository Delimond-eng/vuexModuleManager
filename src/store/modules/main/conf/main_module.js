const states = {
  users: [],
};

const getters = {
  getUsers(state) {
    return state.users;
  },
};

const mutations = {
  setUsers(state, data) {
    state.users = data;
  },
};

import api from "@/api";
const actions = {
  async viewAllUsers({ commit }) {
    api.getAllUsers((users) => {
      commit("setUsers", users);
      console.log(JSON.stringify(users));
    });
  },

  async fetchPosts() {
    return new Promise((resolve, reject) => {
      api.fetchPosts((post) => {
        resolve(post);
      });
    });
  },

  async postData() {
    var data = {
      title: "Chris tenday meza",
      body: "Dev flutter ",
      userId: 104,
      id: 122,
    };
    api.postData(data, (res) => {
      console.log(JSON.stringify(res));
    });
  },
};

export default {
  states: states,
  setters: mutations,
  getters: getters,
  actions: actions,
};
