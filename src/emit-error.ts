import { createError } from './create-error';
import type { ErrorExtra } from './models';

export function emitError(name: string, message: string, extra?: ErrorExtra): never {
  throw createError(name, message, extra);
}
