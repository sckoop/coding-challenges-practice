const { maxProfit } = require('./maxProfit');

describe('Best time to buy and sell stocks', () => {
  it('Example 1', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it('Example 2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  it('Example 3', () => {
    expect(maxProfit([])).toBe(0);
  });
  it('Example 4', () => {
    expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2);
  });
  it('Example 5', () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });
});
