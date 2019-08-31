export const largeGroupPositions = (string) => {
  const largeGroups = [];
  let currentCount = 0;
  let currentPosition = 0;
  let group = {char: '', start: 0, end: 0,};

  const pushLargeGroup = ({start, end}) => {
    if (end - start >= 2) {
      largeGroups.push([start, end]);
    }
  };

  for (let currentChar of string) {
    const {char} = group;
    if (char !== currentChar) {
      pushLargeGroup(group);
      currentCount = 0;
      group = {char: currentChar, start: currentPosition,};
    }

    group.end = currentPosition;
    currentCount++;
    currentPosition++;
  }
  pushLargeGroup(group);

  return largeGroups;
};