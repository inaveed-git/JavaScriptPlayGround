// Write a function calculateMean that calculates the mean (average) of an array of numbers. Implement the function using the reduce method.

// Requirements:
// The function should compute the mean by summing all elements in the array and then dividing by the number of elements.
// Ensure that your function works for arrays of any length.
// Do not use built-in methods like mean() or average().

let calculateMean = (arr) => {
  let newArr = arr.reduce((acc, currvalue) => {
    return acc + currvalue / arr.length;
  }, 0);

  console.log(newArr);
};

calculateMean([-1, 0, 1]);
