import { createTreeFromArray } from '../../../helper';
import { connect } from './connect';

const flattenTree = (node, array) => {
  if (!node) return array;
  array.push(node.val);

  let current = node.next;
  while (current) {
    array.push(current.val);
    current = current.next;
  }
  array.push('#');

  return flattenTree(node.left, array);
};
describe('Populate Next Right Pointer', () => {
  it('Example 1', () => {
    const tree = createTreeFromArray([1, 2, 3]);

    const connected = connect(tree);

    expect(flattenTree(connected, [])).toEqual([1, '#', 2, 3, '#']);
  });

  it('Example 2', () => {
    const tree = createTreeFromArray([1, 2, 3, 4, 5, 6, 7]);

    const connected = connect(tree);

    expect(flattenTree(connected, [])).toEqual([
      1,
      '#',
      2,
      3,
      '#',
      4,
      5,
      6,
      7,
      '#',
    ]);
  });
  it('Example 3', () => {
    const connected = connect(null);

    expect(connected).toBeNull();
  });
});
