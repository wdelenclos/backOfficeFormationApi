const User = require('./user');

let user = new User('jerome@hotmail.fr','jerome','bueno','teacher',19,1);

console.log(user.isValidTeacher())