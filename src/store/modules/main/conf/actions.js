import * as api from '@/api'

const actions={
    async viewAllUsers({commit}){
       api.getAllUsers(users=>{
            commit('setUsers', users);
       })
    }
}
export default actions;