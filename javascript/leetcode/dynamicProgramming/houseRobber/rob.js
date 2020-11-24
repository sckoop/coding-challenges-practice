// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/
export const rob = (nums) => {
  const results = nums.reduce(
    function (previous, now) {
      return [previous[1], Math.max(previous[0] + now, previous[1])];
    },
    [0, 0]
  );

  return results[1];
};
