// Write a function toSnakeCase that converts a given string into snake_case based on two conditions:

// If an uppercase letter is found in the middle of a word, the string is split at that point, and an underscore (_) is inserted between the two parts, making everything lowercase.
// If there are spaces between words, they are replaced with underscores.
// Write a function toKamelCase that converts a string with spaces between words into camel case, where the first word is lowercase and each subsequent word starts with an uppercase letter. The spaces are removed.

let toSnakeCase = (str) => {
  let word1 = "";
  let word2 = "";
  let snakeWord = "";

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      word1 = str.slice(0, i).toLowerCase();
      word2 = str.slice(i).toLowerCase();
      return (snakeWord = word1 + "_" + word2);
    }
  }

  return (snakeWord = str.split(" ").join("_"));
};

console.log(toSnakeCase("helloWorld"));

let toKamelCase = (str) => {
  let words = str.split(" ");
  let camelCaseStr = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    camelCaseStr +=
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  console.log(camelCaseStr);
};

console.log(toKamelCase("ali khan king"));
