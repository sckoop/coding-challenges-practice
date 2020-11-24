import { rob } from './rob';
describe('House Robber', () => {
  it('Example 1', () => {
    const houses = [1, 2, 3, 1];

    expect(rob(houses)).toBe(4);
  });
  it('Example 2', () => {
    const houses = [2, 7, 9, 3, 1];

    expect(rob(houses)).toBe(12);
  });
  it('Example 3', () => {
    const houses = [2];

    expect(rob(houses)).toBe(2);
  });
  it('Example 4', () => {
    const houses = [];

    expect(rob(houses)).toBe(0);
  });
  it('Example 5', () => {
    const houses = [2, 1, 1, 2];

    expect(rob(houses)).toBe(4);
  });
  it('Example 6', () => {
    const houses = [2, 1, 2, 3, 2];

    expect(rob(houses)).toBe(6);
  });
});
