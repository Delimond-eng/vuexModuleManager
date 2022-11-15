import states from "./conf/states";
import mutations from "./conf/setters";
import actions from "./conf/actions";
import getters from "./conf/getters";

const main ={
    namespaced: true,
    state: states,
    getters:getters,
    actions:actions,
    mutations:mutations
}
export default main;