import { createError } from './create-error';
import type { ErrorProps } from './models';

export function emitError(name: string, message: string, extra?: ErrorProps): never {
  throw createError(name, message, extra);
}
