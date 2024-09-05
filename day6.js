// Question:

// Write a function isPalindrome that determines if a given string is a palindrome. A palindrome is a string that reads the same backward as forward, ignoring case and spaces.

// The function should:

// Convert the string to lowercase.
// Reverse the string.
// Compare the reversed string with the original string (both in lowercase).
// Return true if the string is a palindrome and false otherwise.

let isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  reverseStr = str.split("").reverse().join("");
  console.log(str);
  reverseStr = reverseStr.toLowerCase();
  if (reverseStr.trim() === str.trim()) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("madaM"));
console.log(isPalindrome("king is the man"));
