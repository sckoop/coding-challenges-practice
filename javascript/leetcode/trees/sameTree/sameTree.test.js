import {createTreeFormArray} from '../../helper';
import {isSameTree} from "./sameTree";

test('Example 1', () => {
  const pTree = createTreeFormArray([1, 2, 3]);
  const qTree = createTreeFormArray([1, 2, 3]);

  expect(isSameTree(pTree, qTree)).toBeTruthy();
});

test('Example 2', () => {
  const pTree = createTreeFormArray([1, 2,]);
  const qTree = createTreeFormArray([1, null, 2]);

  expect(isSameTree(pTree, qTree)).toBeFalsy();
});
