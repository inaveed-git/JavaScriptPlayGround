// Write two JavaScript functions to check the case of a given character:

// islowerCase(char): This function should take a single character as input and determine if it is a lowercase letter (from a to z). The function should:

// Convert the character to its ASCII code.
// Check if the ASCII code falls within the range for lowercase letters (97 to 122).
// Log "is small alpha" if the character is lowercase.
// Log "not small" if the character is not lowercase.
// Additionally, log the ASCII code of the character.
// isUpperCase(char): This function should take a single character as input and determine if it is an uppercase letter (from A to Z). The function should:

// Convert the character to its ASCII code.
// Check if the ASCII code falls within the range for uppercase letters (65 to 90).
// Log "This is uppercase" if the character is uppercase.
// Log "This is not uppercase" if the character is not uppercase.

let islowerCase = (char) => {
  let charCode = char.charCodeAt(0);

  if (charCode >= 97 && charCode <= 122) {
    console.log("is small alpah");
  } else {
    console.log("not small");
  }

  console.log(charCode);
};

// islowerCase("J");

let isUpperCase = (char) => {
  let charCode = char.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    console.log("This is uppercase");
  } else {
    console.log("This is not uppercase");
  }
};

isUpperCase("z");

// A code = 65
//    Z code = 90
