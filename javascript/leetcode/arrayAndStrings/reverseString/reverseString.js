// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

export const reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;

    start++;
    end--;
  }
};
