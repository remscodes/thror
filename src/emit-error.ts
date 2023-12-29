import { createError } from './create-error';
import type { ErrorExtra } from './models';

/**
 * Creates an `Error` object and throws it immediately.
 * @param name the error name
 * @param message the error message
 * @param extra options
 */
export function emitError(name: string, message: string, extra?: ErrorExtra): never {
  throw createError(name, message, extra);
}
