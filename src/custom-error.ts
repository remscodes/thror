import type { ErrorOptions } from './models';
import type { Indexed } from './models/shared.model';

export interface CustomError extends Indexed {}

export class CustomError extends Error {

  public constructor(
    public override name: string,
    public override message: string,
    extra: ErrorOptions = {}
  ) {
    super(message);

    const { withStack = false } = extra;

    Object
      .entries(extra)
      .filter(([key]: [string, any]) => key !== 'withStack')
      .forEach(([key, value]: [string, any]) => {
        if (value !== undefined) this[key] = value;
      });

    if (!withStack) this.stack = undefined;
  }
}
