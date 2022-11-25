import userModule from "./conf/user_module";

const user ={
    namespaced: true,
    state: userModule.states,
    getters:userModule.getters,
    actions:userModule.actions,
    mutations:userModule.setters
}
export default user;