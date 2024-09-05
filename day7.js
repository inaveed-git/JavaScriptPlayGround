function findMaxElement(array) {
  if (array.length === 0) return undefined; // Handle empty array case

  return array.reduce((max, current) => {
    return current > max ? current : max;
  }, array[0]); // Initial value is array[0]
}

// Example usage:
const numbers = [1, 5, 3, 9, 2];
console.log(findMaxElement(numbers)); // Output: 9
