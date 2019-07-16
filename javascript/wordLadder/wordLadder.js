// https://leetcode.com/problems/word-ladder/

export const isValidChange = (wordA, wordB) => {
  let wordAmount = 0;
  for (let i = 0; i < wordA.length; i++) {
      if (wordA.charAt(i) !== wordB.charAt(i)) {
        wordAmount++;
      }
  }

  return wordAmount === 1;
};

export const ladderLength = (beginWord, endWord, wordList) => {
  const queue = [{word: beginWord, length: 1}];
  const visited = {};

  while(queue.length > 0) {
    const {word, length} = queue.shift();

    if (word === endWord) return length;


    wordList.forEach((listWord) => {
      if (visited[listWord]) return;

      if (!isValidChange(word, listWord)) return;

      visited[listWord] = true;
      queue.push({word: listWord, length: length + 1});
    });

  }

  return 0;
};