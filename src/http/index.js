import axios from 'axios'


const baseURL = "https://jsonplaceholder.typicode.com";

export function get(url){
    return new Promise((resolve)=> {
        axios.get(`${baseURL}/${url}`).then((result) =>{
            var data = result.data;
            resolve(data);
        });
    });
}

export function post(url, data, {options}){
    return new Promise(function(resolve) {
        axios.post(`${baseURL}/${url}`, data, options).then((result) =>{
            var data = result.data;
            resolve(data);
        });
    });
    
}

export default{
    get:get,
    post:post,
};