// Write a JavaScript function isPowerofTwo(number) that checks whether a given number is a power of two. The function should:

// Iterate through powers of two (e.g., 2^1, 2^2, 2^3, etc.) until it reaches the given number.
// If the given number matches any of these powers of two, return true.
// If no match is found, return false.

let isPowerofTwo = (number) => {
  let op = false;
  for (let i = 1; i < number; i++) {
    if (2 ** i == number) {
      op = true;
    }
  }
  return op;
};

console.log(isPowerofTwo(16));
