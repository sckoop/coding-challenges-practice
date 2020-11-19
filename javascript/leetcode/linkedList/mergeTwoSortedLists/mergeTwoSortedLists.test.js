import {mergeTwoLists} from "./mergeTwoSortedLists";
import {createListFromArray} from "../../../helper";

test('expected merge', () => {
  const mergedList = mergeTwoLists(
    createListFromArray([1,2,4]),
    createListFromArray([1,3,4])
  )

  const expectedSort = [1,1,2,3,4,4];

  expect(mergedList).toBeTruthy();

  let current = mergedList;
  for(let i = 0; i < expectedSort.length; i++) {
    expect(current.val).toBe(expectedSort[i]);
    current = current.next;
  }
});
