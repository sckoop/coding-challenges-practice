import { createTreeFromArray } from '../../helper';
import { isSameTree } from './sameTree';

test('Example 1', () => {
  const pTree = createTreeFromArray([1, 2, 3]);
  const qTree = createTreeFromArray([1, 2, 3]);

  expect(isSameTree(pTree, qTree)).toBeTruthy();
});

test('Example 2', () => {
  const pTree = createTreeFromArray([1, 2]);
  const qTree = createTreeFromArray([1, null, 2]);

  expect(isSameTree(pTree, qTree)).toBeFalsy();
});
