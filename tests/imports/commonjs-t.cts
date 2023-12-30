import { type Thror } from 'thror';

const thror = require('thror');

const err: Thror = thror.createError('MyException', 'blabla');
console.log(err);
