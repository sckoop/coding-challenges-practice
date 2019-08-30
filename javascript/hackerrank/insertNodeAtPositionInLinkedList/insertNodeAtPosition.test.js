import {arrayToLinkedList, linkedListToArray} from "../helper/utils";
import {insertNodeAtPosition} from "./insertNodeAtPosition";

test('Example 1', () => {
  const head = arrayToLinkedList([16, 13 ,7]);

  const modifiedList = insertNodeAtPosition(head, 1, 2)

  expect(linkedListToArray(modifiedList)).toEqual([16, 13, 1, 7])
});

test('Example 2', () => {
  const head = arrayToLinkedList([11, 9, 19, 10, 4]);

  const modifiedList = insertNodeAtPosition(head, 20, 3)

  expect(linkedListToArray(modifiedList)).toEqual([11, 9, 19, 20, 10, 4])
});

test('Example 3', () => {
  const head = arrayToLinkedList([1, 2, 3, 4, 5, 6]);

  const modifiedList = insertNodeAtPosition(head, 7, 6);

  expect(linkedListToArray(modifiedList)).toEqual([1, 2, 3, 4, 5, 6, 7])
});