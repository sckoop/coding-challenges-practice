import {largeGroupPositions} from "./positionsOfLargeGroup";

test('Example 1', () => {
  expect(largeGroupPositions('abbxxxxzzy')).toEqual([[3,6]]);
})

test('Example 2', () => {
  expect(largeGroupPositions('abc')).toEqual([]);
})

test('Example 3', () => {
  expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([[3,5],[6,9],[12,14]]);
})

test('Example 4', () => {
  expect(largeGroupPositions('aaa')).toEqual([[0,2],]);
})