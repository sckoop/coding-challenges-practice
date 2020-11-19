import { createArrayFromList, createListFromArray } from '../../../helper';
import { addTwoNumbers } from './addTwoNumbers';

describe('Add Two Numbers', () => {
  it('Example 1', () => {
    const l1 = createListFromArray([2, 4, 3]);
    const l2 = createListFromArray([5, 6, 4]);

    const result = addTwoNumbers(l1, l2);

    expect(createArrayFromList(result)).toEqual([7, 0, 8]);
  });
  it('Example 2', () => {
    const l1 = createListFromArray([0]);
    const l2 = createListFromArray([0]);

    const result = addTwoNumbers(l1, l2);

    expect(createArrayFromList(result)).toEqual([0]);
  });
  it('Example 3', () => {
    const l1 = createListFromArray([9, 9, 9, 9, 9, 9, 9]);
    const l2 = createListFromArray([9, 9, 9, 9]);

    const result = addTwoNumbers(l1, l2);

    expect(createArrayFromList(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
