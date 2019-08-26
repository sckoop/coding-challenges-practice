import {countSwaps} from "./countSwaps";

test('Example 1', () => {
  const {swaps, array} = countSwaps([1, 2, 3]);

  expect(swaps).toBe(0);
  expect(array.shift()).toBe(1);
  expect(array.pop()).toBe(3);
})

test('Example 2', () => {
  const {swaps, array} = countSwaps([3, 2, 1]);

  expect(swaps).toBe(3);
  expect(array.shift()).toBe(1);
  expect(array.pop()).toBe(3);
})
test('Example 3', () => {
  const {swaps, array} = countSwaps([4, 2, 3 ,1]);

  expect(swaps).toBe(5);
  expect(array.shift()).toBe(1);
  expect(array.pop()).toBe(4);
})