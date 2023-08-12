import type { ErrorExtra } from './models';
import type { Indexed } from './models/shared.model';

export interface CustomError extends Indexed {}

export interface Thror extends Indexed {}

export class Thror extends Error {

  public constructor(
    public override name: string,
    public override message: string,
    extra: ErrorExtra = {}
  ) {
    super(message);

    const { withStack = false } = extra;

    Object
      .entries(extra)
      .filter(([key]: [string, any]) => key !== 'withStack')
      .forEach(([key, value]: [string, any]) => this[key] = value);

    if (!withStack) this.stack = undefined;
  }
}
