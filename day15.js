let sumOfSquare = (arr) => {
  //   let sum = 0;
  let sum = 0;
  let mul = 0;
  for (let i of arr) {
    mul = i * i;
    sum += mul;
  }

  return sum;
};

console.log(sumOfSquare([1, 2, 3]));
