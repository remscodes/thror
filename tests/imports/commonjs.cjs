const thror = require('thror');

const err = thror.createError('MyException', 'blabla');
console.log(err);
