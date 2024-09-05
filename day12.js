// Write a JavaScript function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string str. The function should:

// Convert the string to lowercase and remove any leading or trailing whitespace.
// Iterate through each character in the string and check if it is a vowel (a, e, i, o, u).
// Count how many vowels are present in the string.
// Print the total number of vowels.

// METHOD ONE
// let countVowels = (str) => {
//   str = str.toLowerCase().trim();

//   let count = 0;

//   for (let i of str) {
//     if (i == "a" || i == "e" || i == "i" || i == "u") {
//       count++;
//     }
//   }
//   console.log(count);
// };

// countVowels("aaeeii");

// METHOD TWO

let countVowels = (str) => {
  let vowel = ["a", "e", "i", "u"];

  let count = 0;

  let arr = str.split("");

  for (let char of arr) {
    if (vowel.includes(char.toLowerCase().trim())) {
      count++;
    }
  }

  console.log(count);
};

countVowels("aaaa");
