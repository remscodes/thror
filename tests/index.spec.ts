import { expect } from 'chai';
import { createError, emitError, type Thror } from '../src';
import { expectProperty } from './fixtures/expect-util';

describe('Core', () => {
  const name: string = 'JwtException';
  const message: string = 'Bad token';
  const status: number = 400;

  it('should create an Error with custom `status` property', () => {
    const err: Thror = createError(name, message, { status });

    expect(err).to.be.a('Error');

    expectProperty(err, 'withStack', 'boolean', false);
    expectProperty(err, 'name', 'string', name);
    expectProperty(err, 'message', 'string', message);
    expectProperty(err, 'status', 'number', status);
  });

  it('should throw an Error immediately', () => {
    expect(() => {
      emitError(name, message, { status });
    }).to.throw();
  });

  it.skip('should have Thror toString() format', () => {
    const err: Thror = createError(name, message, { status });

    expect(err.toString()).to.be.equal(`[${name}: ${message}]`);
  });
});
