import {createTreeFormArray} from "../../helper";
import {searchBST} from "./searchBinarySearchTree";

test('Example 1', () => {
  const tree = createTreeFormArray([4, 2, 7, 1, 3]);

  expect(searchBST(tree, 2)).toEqual(createTreeFormArray([2, 1, 3]));
  expect(searchBST(tree, 5)).toBe(null);
});