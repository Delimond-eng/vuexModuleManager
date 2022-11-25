const states ={
    users: [],
}

const mutations = {

}

const getters ={
    getUsers(rootGetters){
     return rootGetters['main/getUsers'];
    }
}

const actions = {
    async testNested({rootGetters, dispatch}){
        await dispatch('main/viewAllUsers', null, {root: true});
        let users = rootGetters['main/getUsers'];
        console.log(JSON.stringify(users));
    }
}

export default{
    states: states,
    setters: mutations,
    getters: getters,
    actions: actions
}