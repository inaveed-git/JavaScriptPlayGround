// Write a function reverseString that takes a string as input and returns a new string with the characters in reverse order. You must implement this function using a for loop and avoid using any built-in functions for reversing the string.

// Requirements:
// The function should not use built-in methods like reverse().
// You must use a for loop to iterate through the characters of the string.
// Ensure that your function works for any non-empty string.

let reverseString = (str) => {
  let reverseStr = "";

  // Loop starting from the last character in the string
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]; // Add the character to the reversed string
  }

  return reverseStr; // Return the reversed string
};

// Example usage
console.log(reverseString("ali")); // Output: "ila"
