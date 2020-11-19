export const isSubsequence = (sequence, stringToCheck) => {
  const sequenceArray = sequence.split('');
  let sequenceChar = null;

  if (stringToCheck.length === 1) {
    return sequenceChar === stringToCheck;
  }

  for (let i = 0; i < stringToCheck.length; i++) {
    if (!sequenceChar) {
      sequenceChar = sequenceArray.shift();
    }
    const currentChar = stringToCheck.charAt(i);

    if (sequenceChar === currentChar) {
      sequenceChar = null;
    }
  }

  return sequenceArray.length === 0;
};
