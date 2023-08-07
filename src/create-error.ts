import { CustomError } from './custom-error';
import type { ErrorOptions } from './models';

export function createError(name: string, message: string, options: ErrorOptions = {}): CustomError {
  return new CustomError(name, message, options);
}
