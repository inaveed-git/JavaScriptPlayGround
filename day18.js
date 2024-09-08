// Write a function startWith that checks if a given string starts with a specified substring. The function should split the string into words and compare the specified substring with the first word of the string. If the substring matches the beginning of the first word, print "match found". Otherwise, print "no match".

//Method 1
// let startWith = (str, checkStr) => {
//   let len = checkStr.length;
//   Newstr = str.substring(0, len);

//   let checkStrLen = str.split(" ");

//   if (Newstr === checkStrLen[0]) {
//     console.log("match found");
//   } else {
//     console.log("no match");
//   }
// };

// startWith("hell king", "hell");

// Method2

let startWith = (str, checkStr) => {
  return str.startsWith(checkStr);
};

console.log(startWith("hell king", "hell"));
