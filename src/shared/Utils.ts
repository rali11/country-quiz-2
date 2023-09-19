export const getRandomInt = (max: number, notAvailableNumbers: number[] = []) => {
  let number = Math.floor(Math.random() * max);
  while (notAvailableNumbers.find(item => item === number)) {
    number = Math.floor(Math.random() * max);
  }
  return number;
}