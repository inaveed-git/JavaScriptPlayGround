// Question:
// Write a JavaScript function arrayAreEqual(arr1, arr2) that compares two arrays arr1 and arr2 and checks if they are equal. The function should return true if the arrays are identical (same length and all elements in the same order) and false otherwise.

// Requirements:
// The function should first check if the lengths of the two arrays are equal. If they are not, it should return false.
// The function should iterate through the arrays and compare each element. If any element in arr1 does not match the corresponding element in arr2, the function should return false.
// If the arrays have the same length and all elements are equal, the function should return true.

let arrayAreEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(arrayAreEqual([1, 2, 3, 4], [1, 2, 3])); // Output: false
console.log(arrayAreEqual([1, 2, 3], [1, 2, 3])); // Output: true
