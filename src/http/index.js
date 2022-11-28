import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const http = {
    get:function(url) {
        return new Promise((resolve) => {
            axios.get(`${baseURL}/${url}`).then((result) => {
                var data = result.data;
                resolve(data);
            }).catch(err=>console.log("http get error from"+err));
        });
    },

    post:function(url, data, options) {
        return new Promise(function (resolve) {
        if (options !== undefined) {
            axios.post(`${baseURL}/${url}`, data, options).then((result) => {
                var data = result.data;
                resolve(data);
            }).catch(err=>console.log("http get error from"+err));
        } else {
            axios.post(`${baseURL}/${url}`, data).then((result) => {
                var data = result.data;
                resolve(data);
            }).catch(err=>console.log("http get error from"+err));
        }
        });
    },
};

export default http;
