const { maxProfit } = require('./maxProfit');

describe('Best time to buy and sell stocks II', () => {
  it('Example 1', () => {
    const stocks = [7, 1, 5, 3, 6, 4];

    expect(maxProfit(stocks)).toBe(7);
  });
  it('Example 2', () => {
    const stocks = [1, 2, 3, 4, 5];

    expect(maxProfit(stocks)).toBe(4);
  });
  it('Example 3', () => {
    const stocks = [7, 6, 4, 3, 1];

    expect(maxProfit(stocks)).toBe(0);
  });
});
