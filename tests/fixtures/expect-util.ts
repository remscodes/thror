import { expect } from 'chai';

export function expectProperty<T extends {}>(obj: T, propertyKey: keyof T & string, type: string, expected: any): void {
  const assertion: Chai.Assertion = expect(obj)
    .to.have.property(propertyKey)
    .and
    .to.be.a(type);

  if (expected !== undefined) assertion
    .and
    .to.be.equal(expected);
}
