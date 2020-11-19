// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

const resultCache = new Map();

export const climbStairs = (n) => {
  if (resultCache.has(n)) return resultCache.get(n);
  if (n < 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  const result = climbStairs(n - 1) + climbStairs(n - 2);
  resultCache.set(n, result);
  return result;
};
