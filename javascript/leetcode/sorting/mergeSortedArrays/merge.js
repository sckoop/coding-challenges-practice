// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/587/

export const merge = (nums1, m, nums2, n) => {
  let nums1Index = 0;
  let nums2Index = 0;
  const nums1Copy = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if (nums1Copy[nums1Index] === undefined) {
      nums1[i] = nums2[nums2Index];
      nums2Index++;
      continue;
    }
    if (nums2[nums2Index] === undefined) {
      nums1[i] = nums1Copy[nums1Index];
      nums1Index++;
      continue;
    }

    if (nums1Copy[nums1Index] < nums2[nums2Index]) {
      nums1[i] = nums1Copy[nums1Index];
      nums1Index++;
      continue;
    }

    nums1[i] = nums2[nums2Index];
    nums2Index++;
  }
};
