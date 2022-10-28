const numbers = [2, 3, 4, 6, 7, 12, 24, 10];

const sum = (array) => {
  let accumulatorFor = array[0];

  for (let index = 1; index < array.length; index += 1) {
    accumulatorFor = accumulatorFor + array[index];
  }
  return accumulatorFor;
};

// console.log(sum(numbers));

const numbersReduce = (array) => {
  return array.reduce((acc, cur) => acc + cur, 0);
}

console.log(numbersReduce(numbers));
