import {roadsAndLibraries} from "./roadsAndLibraries";

test('Example 1a', () => {
  expect(roadsAndLibraries(3, 2, 1, [[1, 2], [3, 1], [2, 3]])).toBe(4);
});

test('Example 1b', () => {
  expect(roadsAndLibraries(6, 2, 5, [[1, 3], [3, 4], [2, 4], [1, 2], [2, 3], [5, 6]])).toBe(12);
});

test('Example 2', () => {
  expect(roadsAndLibraries(6, 2, 3, [[1, 2], [1, 3], [4, 5], [4, 6]])).toBe(12)
})

test('Example 3', () => {
  expect(roadsAndLibraries(5, 6, 1, [[1, 2], [1, 3], [1, 4]])).toBe(15)
})

test('Example 4a', () => {
  expect(roadsAndLibraries(9, 91, 84, [[8, 2], [2, 9], ])).toBe(805)
})

test('Example 4b', () => {
  expect(roadsAndLibraries(5, 92, 23, [
    [2, 1], [5, 3], [5, 1], [3, 4], [3, 1], [5, 4], [4, 1], [5, 2], [4, 2],
  ])).toBe(184)
})

test('Example 4c', () => {
  expect(roadsAndLibraries(8, 10, 55, [[8, 2], [2, 9], ])).toBe(80)
})

test('Example 4d', () => {
  expect(roadsAndLibraries(1, 5, 3, [])).toBe(5)
})

test('Example 4e', () => {
  expect(roadsAndLibraries(2, 102, 1, [])).toBe(204)
})
