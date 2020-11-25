// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
export const reverse = (x) => {
  if (x.length === 1) return x;

  const sign = x < 0 ? -1 : 1;

  const reversedNumber = `${Math.abs(x)}`.split('').reverse().join('');

  if (reversedNumber > 0x7fffffff) return 0;

  return parseInt(reversedNumber) * sign;
};
