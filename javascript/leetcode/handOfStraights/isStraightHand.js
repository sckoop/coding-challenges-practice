// https://leetcode.com/problems/hand-of-straights/submissions/
// TODO Radix sort doesn't work correct.
// https://www.geeksforgeeks.org/radix-sort/

export const isStraightHand = (hand, groupSize) => {
  if (hand.length % groupSize !== 0) {
    return false;
  }

  // helper function to get the last nth digit of a number
  const getDigit = (num, nth) => {
    // get last nth digit of a number
    let ret = 0;
    while (nth--) {
      ret = num % 10;
      num = Math.floor((num - ret) / 10);
    }
    return ret
  };

// radixSort
  const radixSort = (list) => {
    const max = Math.floor(Math.log10(Math.max.apply(Math, list)));
    // get the length of digits of the max value in this array
    let digitBuckets = [];
    let idx = 0;

    for (let i = 0; i < max + 1; i++) {

      // rebuild the digit buckets according to this digit
      digitBuckets = [];
      for (let j = 0; j < list.length; j++) {
        let digit = getDigit(list[j], i + 1);

        digitBuckets[digit] = digitBuckets[digit] || [];
        digitBuckets[digit].push(list[j]);
      }

      // rebuild the list according to this digit
      idx = 0;
      for (let t = 0; t < digitBuckets.length; t++) {
        if (digitBuckets[t] && digitBuckets[t].length > 0) {
          for (let j = 0; j < digitBuckets[t].length; j++) {
            list[idx++] = digitBuckets[t][j];
          }
        }
      }
    }
    return list
  };

  radixSort(hand);

  let group = [];
  let tmp = [];

  while (hand.length > 0) {
    if (group.length === groupSize) {
      hand = [...tmp, ...hand];
      group = [];
      tmp = [];
    }

    const current = hand.shift();

    if (!group.length) {
      group.push(current);
      continue;
    }

    const prev = group[group.length - 1];


    if (current === prev) {
      tmp.push(current);
      continue;
    }

    if (current === prev + 1) {
      group.push(current);
      continue;
    }

    return false;
  }

  return !tmp.length;
}
