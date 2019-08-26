import {checkMagazine} from "./checkMagazine";

test('Example 1', () => {
  const magazine = 'give me one grand today night'.split(' ');
  const note = 'give one grand today'.split(' ');
  expect(checkMagazine(magazine, note)).toBeTruthy();
})

test('Example 2', () => {
  const magazine = 'two times three is not four'.split(' ');
  const note = 'two times two is four'.split(' ');
  expect(checkMagazine(magazine, note)).toBeFalsy();
})

test('Example 3', () => {
  const magazine = 'ive got a lovely bunch of coconuts'.split(' ');
  const note = 'ive got some coconuts'.split(' ');
  expect(checkMagazine(magazine, note)).toBeFalsy();
})

test('Example 4', () => {
  const magazine = 'give me One grand today night'.split(' ');
  const note = 'give one grand today'.split(' ');
  expect(checkMagazine(magazine, note)).toBeFalsy();
})

test('Example 5', () => {
  const magazine = 'two times two is not four'.split(' ');
  const note = 'two times two is four'.split(' ');
  expect(checkMagazine(magazine, note)).toBeTruthy();
})