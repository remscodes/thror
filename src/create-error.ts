import type { ErrorProps } from './models';
import { Thror } from './thror';

export function createError(name: string, message: string, extra?: ErrorProps): Thror {
  return new Thror(name, message, extra);
}
