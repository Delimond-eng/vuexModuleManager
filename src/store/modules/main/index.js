import mainModule from "./conf/main_module";

const main ={
    namespaced: true,
    state: mainModule.states,
    getters:mainModule.getters,
    actions:mainModule.actions,
    mutations:mainModule.setters
}
export default main;