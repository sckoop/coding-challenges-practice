export const fizzbuzz = (number) => {
  const result = [];
  for (let i = 1; i <= number; i++) {
    let resultEntry = '';

    if (i % 3 === 0) {
      resultEntry += 'Fizz'
    }

    if (i % 5 === 0) {
      resultEntry += 'Buzz'
    }

    result.push(resultEntry || `${i}`);
  }

  return result;
};


