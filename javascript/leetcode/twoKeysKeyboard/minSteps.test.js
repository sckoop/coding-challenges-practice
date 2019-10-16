import {minSteps} from "./minSteps";

test('Example 1', () => {
  expect(minSteps(3)).toBe(3);
})

test('Example 2', () => {
  expect(minSteps(7)).toBe(7);
})

test('Example 3', () => {
  expect(minSteps(10)).toBe(7);
})

test('Example 4', () => {
  expect(minSteps(8)).toBe(6);
})

test('Example 5', () => {
  expect(minSteps(24)).toBe(9);
})