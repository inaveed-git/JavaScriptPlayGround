// Write a JavaScript function named factorial that takes a number num as input and returns the factorial of that number. The factorial of a number is the product of all positive integers less than or equal to that number. For example, the factorial of 4 (denoted as 4!) is calculated as 4 × 3 × 2 × 1, which equals 24.

let factorial = (num) => {
  let production = 1;

  if (num == 0) {
    return (production = 0);
  }

  for (let i = 1; i <= num; i++) {
    production = production * i;
  }

  return production;
};

console.log(factorial(0));
