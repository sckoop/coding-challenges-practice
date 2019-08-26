export const rotLeft = (array, rotations) => {
  return [
    ...array.slice(rotations),
    ...array.slice(0, rotations),
  ];
};