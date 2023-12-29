import type { ErrorExtra } from './models';
import { Thror } from './thror';

/**
 * Creates an `Error` object.
 * @param name the error name
 * @param message the error message
 * @param extra  options
 */
export function createError(name: string, message: string, extra?: ErrorExtra): Thror {
  return new Thror(name, message, extra);
}
