// Question:
// Write a JavaScript function arraySort that takes an array of numbers as input and returns a new array sorted in ascending order. Your function should not modify the original array.

// Implement the function using JavaScript’s sort() method with a comparison function to handle numeric sorting properly.
// You can assume the input array contains only numbers.
// After sorting, return the sorted array.

let arraySort = (arr) => {
  // Create a copy of the array to avoid modifying the original array
  let sortArr = [...arr];

  // Sort the array in ascending order
  sortArr.sort((a, b) => a - b);

  // Return the sorted array
  return sortArr;
};

console.log(arraySort([3, 1, 2, 10, 100, 3000, 3, 400])); // Output: [1, 2, 3]
