const data = require('./data');
export function getAllUsers (exec) {
    setTimeout(() => {
      exec(data)
    }, 16)
}