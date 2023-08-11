import { expect } from 'chai';
import { createError } from '../src';
import { expectProperty } from './fixtures/expect-util';

describe('Core', () => {
  const name: string = 'JwtException';
  const message: string = 'Bad token';
  const status: number = 400;

  const err: Error = createError(name, message, { status, withStack: false });

  it('should have properties', () => {
    expectProperty(err, 'name', 'string', name);
    expectProperty(err, 'message', 'string', message);
    expectProperty(err, 'status', 'number', status);
  });

  it('should have toString() format', () => {
    console.error(err);
    expect(err.toString()).to.be.equal(`${name}: ${message}`);
  });
});
