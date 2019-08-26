export const repeatedString = (repeatedString, totalLength) => {
  let amountOfA = 0;

  const amount = parseInt(totalLength / repeatedString.length);
  const extraAmount = totalLength % repeatedString.length;

  for(let i = 0; i < repeatedString.length; i++) {
    if (repeatedString.charAt(i) !== 'a') {
      continue;
    }

    amountOfA = amountOfA + amount;
    if (i < extraAmount) {
      amountOfA++;
    }
  }

  return amountOfA;
}