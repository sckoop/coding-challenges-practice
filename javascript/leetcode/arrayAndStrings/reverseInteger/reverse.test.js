const { reverse } = require('./reverse');

describe('Reverse Integer', () => {
  it('Example 1', () => {
    expect(reverse(123)).toBe(321);
  });
  it('Example 2', () => {
    expect(reverse(-123)).toBe(-321);
  });
  it('Example 3', () => {
    expect(reverse(120)).toBe(21);
  });
  it('Example 4', () => {
    expect(reverse(0)).toBe(0);
  });
  it('Example 5', () => {
    expect(reverse(1534236469)).toBe(0);
  });
});
