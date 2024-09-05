// Question:

// Write a function called findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple words of the same maximum length, return the first one encountered. Words are defined as sequences of characters separated by spaces.

/*
Method One of solving the problem
let findLongestWord = (string) => {
  let newWord = string.split(" ");

  maxWord = "";
  maxLenght = 0;

  for (let i of newWord) {
    // console.log(i)

    if (i.length > maxLenght) {
      maxWord = i;
      maxLenght = maxWord.length;
    }
  }
  return maxWord;
  // console.log(newWord)
};

console.log(findLongestWord("ali is good"));  

*/

/*
SECOUND METHOD TO SOLVE THIS PROBLEM
let findLongestWord = (str) => {
  // Split the string into words
  let words = str.split(" ");
  

  return words.reduce((oldVal, currVal) =>
    currVal.length > oldVal.length ? currVal : oldVal
  );
};

console.log(findLongestWord("ali is good"));

*/
