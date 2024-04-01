import * as thror from 'thror';

const err = thror.createError('MyException', 'blabla');
console.log(err);
