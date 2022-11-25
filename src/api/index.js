const data = require('./data');
import http from '@/http'
export function getAllUsers (exec) {
    setTimeout(() => {
      exec(data)
    }, 16)
}

export function fetchPosts(exec){
  http.get('posts').then(post =>{
    exec(post);
  });
}

export function postData(data, exec){
  http.post('posts',data, {}).then(post=>{
    exec(post);
  });
}