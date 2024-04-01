import { createError, type Thror } from 'thror';

const err: Thror = createError('MyException', 'blabla');
console.log(err);
