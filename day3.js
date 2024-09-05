// Function Requirement:

// Function Name: countChar

// Purpose: To count the number of occurrences of a specified character in a string, regardless of the case (uppercase or lowercase).

// Parameters:

// str (string): The input string in which to count the occurrences of the character.
// char (string): The character whose occurrences need to be counted.
// Behavior:

// Convert both the input string (str) and the specified character (char) to lowercase to ensure case-insensitive comparison.
// Iterate through each character of the converted string.
// Count how many times the specified character appears in the string.
// Print the total count of occurrences.

/* Method one
let countChar = (str, char) => {
  let lowerStr = str.toLowerCase();
  let countChar = char.toLowerCase();

  let newStr = "";
  let valueCounter = 0;

  for (let i of lowerStr) {
    if (i == countChar) {
      newStr += i;
    }
  }
  valueCounter = newStr.length;
  console.log(valueCounter);
};
countChar("naaaadddDDme", "d");
*/

// Method two
let countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let totalValue = str.split("").reduce((total, currValue) => {
    if (currValue == char) {
      total++;
    }
    return total;
  }, 0);

  return totalValue;
};

console.log(countChar("aliiiiiiii", "i"));
