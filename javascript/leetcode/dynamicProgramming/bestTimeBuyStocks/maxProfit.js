export const maxProfit = (prices) => {
  let lowest = null;
  let highest = null;
  const ranges = [];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (lowest === null) {
      lowest = price;
      continue;
    }

    if (price < lowest && highest !== null) {
      ranges.push({ lowest, highest });
      lowest = price;
      highest = null;
      continue;
    }

    if (highest === null && lowest > price) {
      lowest = price;
      highest = null;
      continue;
    }

    if (highest === null || price > highest) {
      highest = price;
    }
  }

  const pastHighest = ranges.reduce((acc, curr) => {
    const result = curr.highest - curr.lowest;

    return acc > result ? acc : result;
  }, 0);

  const lastHighest = highest === null ? 0 : highest - lowest;

  return lastHighest > pastHighest ? lastHighest : pastHighest;
};
