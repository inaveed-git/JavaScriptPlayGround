// Question:

// Write a JavaScript function calculateAverage(arr) that calculates the average of all numeric values in the given array arr. The function should handle the following:

// Calculate the sum of all numeric values in the array.
// Determine the length of the array.
// Compute the average by dividing the sum by the length of the array.
// Log the following information to the console:
// The total length of the array.
// The total sum of the numeric values.
// The average of the numeric values.
// The function should also handle edge cases such as:

// The array being empty.
// The array containing non-numeric values (in which case, an error message should be logged).

// let calculateAverage = (arr) => {
//   // Check if the array is empty
//   if (arr.length === 0) {
//     console.log("Array is empty.");
//     return;
//   }

//   // Initialize variables
//   let calTotal = 0;
//   let arrLength = arr.length;
//   let average = 0;

//   // Calculate the sum of the array elements
//   for (let i of arr) {
//     if (typeof i !== "number") {
//       console.error("Array contains non-numeric values.");
//       return;
//     }
//     calTotal += i;
//   }

//   // Calculate the average
//   average = calTotal / arrLength;

//   // Log results
//   console.log(arrLength, "the total length is");
//   console.log(calTotal, "and the total is");
//   console.log(average, "the average is");
// };

//  METHOD TWO TO SOLVE THE PROBLEM
let calculateAverage = (arr) => {
  // Calculate the sum using reduce
  let sum = arr.reduce((total, curr) => total + curr, 0);

  // Calculate the average
  let average = arr.length > 0 ? sum / arr.length : 0;

  // Log the results
  console.log(arr.length, "the total length is");
  console.log(sum, "and the total is");
  console.log(average, "the average is");
};

// Example usage
calculateAverage([100, 50]);
// Expected output:
// 2 the total length is
// 150 and the total is
// 75 the average is
