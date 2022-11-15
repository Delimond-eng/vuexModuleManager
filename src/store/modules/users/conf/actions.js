const actions = {
    async testNested({rootGetters, dispatch}){
        await dispatch('main/viewAllUsers', null, {root: true});
        let users = rootGetters['main/getUsers'];
        console.log(JSON.stringify(users));
    }
}


export default actions;