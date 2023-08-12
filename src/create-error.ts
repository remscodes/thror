import type { ErrorExtra } from './models';
import { Thror } from './thror';

export function createError(name: string, message: string, extra?: ErrorExtra): Thror {
  return new Thror(name, message, extra);
}
