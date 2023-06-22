export const getRandomInt = (max, notAvailableNumbers = []) => {
  let number = Math.floor(Math.random() * max);
  while (notAvailableNumbers.find(item => item === number)) {
    number = Math.floor(Math.random() * max);
  }
  return number;
}