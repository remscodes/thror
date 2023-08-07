import { createError } from '../src';
import { expectProperty } from './fixtures/expect-util';

describe('Core', () => {
  const err: Error = createError('Test', 'Message', {
    status: 500
  });


  it('should have name and message properties', () => {
    expectProperty(err, 'name', 'string');
    expectProperty(err, 'message', 'string');
    expectProperty(err, 'status', 'number');

    console.error(err);
  });
});
