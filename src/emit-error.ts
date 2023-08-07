import { createError } from './create-error';
import type { ErrorOptions } from './models';

export function emitError(name: string, message: string, options?: ErrorOptions): never {
  throw createError(name, message, options);
}
