import { expect } from 'chai';

export function expectProperty(obj: any, propertyKey: string, type: string): void {
  expect(obj)
    .to.have.property(propertyKey)
    .and
    .to.be.a(type);
}
