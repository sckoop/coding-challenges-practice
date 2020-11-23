const { reverseString } = require('./reverseString');

describe('Reverse String', () => {
  it('Example 1', () => {
    const array = ['h', 'e', 'l', 'l', 'o'];
    reverseString(array);
    expect(array).toEqual(['o', 'l', 'l', 'e', 'h']);
  });

  it('Example 2', () => {
    const array = ['H', 'a', 'n', 'n', 'a', 'h'];
    reverseString(array);
    expect(array).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
