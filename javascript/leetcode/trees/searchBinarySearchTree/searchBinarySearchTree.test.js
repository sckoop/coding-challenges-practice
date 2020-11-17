import { createTreeFromArray } from '../../helper';
import { searchBST } from './searchBinarySearchTree';

test('Example 1', () => {
  const tree = createTreeFromArray([4, 2, 7, 1, 3]);

  expect(searchBST(tree, 2)).toEqual(createTreeFromArray([2, 1, 3]));
  expect(searchBST(tree, 5)).toBe(null);
});
