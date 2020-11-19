import {createArrayFromList, createListFromArray} from "../../helper";
import {splitListToParts} from "./splitListToParts";

test('Example 1', () => {
  const root = createListFromArray([1, 2, 3]);
  const splitList = splitListToParts(root, 5);

  expect(splitList.map(createArrayFromList)).toEqual([[1], [2], [3], null, null]);
})

test('Example 2', () => {
  const root = createListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const splitList = splitListToParts(root, 3);

  expect(splitList.map(createArrayFromList)).toEqual([[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]);
})
test('Example 3', () => {
  const root = createListFromArray([1,2,3,4]);
  const splitList = splitListToParts(root, 5);

  expect(splitList.map(createArrayFromList)).toEqual([[1], [2], [3], [4], null]);
})

test('Example 4', () => {
  const splitList = splitListToParts(null, 3);

  expect(splitList.map(createArrayFromList)).toEqual([null, null, null]);
})


test('Example 5', () => {
  const root = createListFromArray([0,1,2]);
  const splitList = splitListToParts(root, 2);

  expect(splitList.map(createArrayFromList)).toEqual([[0, 1], [2]]);
})
