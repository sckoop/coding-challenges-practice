import {arrangingCoins} from "./arrangingCoins";

test('Example 1', () => {
  expect(arrangingCoins(5)).toBe(2);
})

test('Example 2', () => {
  expect(arrangingCoins(8)).toBe(3);
})