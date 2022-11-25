const states = {
    users:[]
}

const getters ={
    getUsers(state){
     return state.users;
    }
}

const mutations={
    setUsers(state, data){
        state.users = data;
    }
}

import * as api from '@/api'
const actions={
    async viewAllUsers({commit}){
       api.getAllUsers(users=>{
            commit('setUsers', users);
       })
    }
}

export default{
    states:states,
    setters:mutations,
    getters:getters,
    actions:actions
}