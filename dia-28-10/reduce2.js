const filterOdd = (numbers) => numbers
  .filter((number) => number % 2 !== 0)
  .reduce((acc, cur) => acc + cur);

console.log(filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));