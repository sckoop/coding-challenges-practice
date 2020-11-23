const { createListFromArray } = require('../../../helper');
const { reverseList, reverseListIteratively } = require('./reverseList');

describe('Reverse Linked List', () => {
  it('Example 1 - Iterative', () => {
    const list = createListFromArray([1, 2, 3, 4, 5]);
    const expected = createListFromArray([5, 4, 3, 2, 1]);

    expect(reverseListIteratively(list)).toEqual(expected);
  });

  it('Example 1 - Recursive', () => {
    const list = createListFromArray([1, 2, 3, 4, 5]);
    const expected = createListFromArray([5, 4, 3, 2, 1]);

    expect(reverseList(list)).toEqual(expected);
  });
});
