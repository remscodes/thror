import type { ErrorExtra } from './models';

export interface Thror extends ErrorExtra {}

export class Thror extends Error {

  public constructor(
    public override name: string,
    public override message: string,
    extra: ErrorExtra = {},
  ) {
    super(message);

    const { withStack = false } = extra;
    this.withStack = withStack;

    Object
      .entries(extra)
      .forEach(([key, value]: [string, any]) => this[key] = value);

    if (!withStack) this.stack = undefined;
  }
}
