import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  test('Example 1', () => {
    expect(
      isPalindrome("A man, a plan, a canal: Panama")
    ).toBeTruthy();
  })
  test('Example 2', () => {
    expect(
      isPalindrome("race a car")
    ).toBeFalsy();
  })
  test('Example 3', () => {
    expect(
      isPalindrome("")
    ).toBeTruthy();
  })

})
