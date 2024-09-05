// Sure! Here is how the question can be framed based on your solution:

// ### Question:
// Write a JavaScript function called `generateHash` that takes a string `str` as input and returns a hashtag generated from the string. The function should follow these rules:

// 1. The function should return `false` if:
//    - The string length exceeds 280 characters.
//    - The string is empty (length is 0).
// 2. The string should be converted into a hashtag as follows:
//    - The first letter of each word should be capitalized.
//    - All spaces should be removed.
//    - A `#` should be added at the beginning of the generated string.
// 3. The function should trim any leading or trailing spaces from each word before processing it.

// For example:
// ```javascript
// console.log(generateHash("hello world"));  // Output: "#HelloWorld"
// console.log(generateHash("  code  challenge  "));  // Output: "#CodeChallenge"
// console.log(generateHash("a string with more than 280 characters..."));  // Output: false
// ```

// Write the function `generateHash(str)` to implement the above logic.

/* FIST METHOD
let generateHash = (str) => {
  if (str.length > 280 || str.length == 0) {
    return false;
  }

  let newstr = str.split(" ");
  let eachCapital = [];
  for (let i of newstr) {
    eachCapital.push(i.charAt(0).toUpperCase().trim() + i.slice(1));
  }
  let hash = eachCapital.join("");
  return "#" + hash;
};
*/

let generateHash = (str) => {
  // Check if the length of the string exceeds 280 characters
  if (str.length > 280) {
    return false;
  }

  // Process the string to capitalize the first letter of each word
  const newWord = str
    .trim() // Remove leading and trailing spaces
    .split(/\s+/) // Split on any whitespace (including multiple spaces)
    .map(
      (currValue) => currValue.charAt(0).toUpperCase() + currValue.slice(1) // Capitalize the first letter
    )
    .join(""); // Join words without spaces

  return `#${newWord}`; // Add hash symbol at the beginning
};

// For example:
console.log(generateHash("hello world")); // Output: "#HelloWorld"
console.log(generateHash("  code  challenge  ")); // Output: "#CodeChallenge"
console.log(generateHash("a string with more than 280 characters...")); // Output: false
