// Write a function findMin that takes an array of numbers as an argument and sorts the array in descending order. After sorting, the function should print the smallest number from the array.

//Method one
// let findMin = (arr) => {
//   let sortnum = arr.sort((a, b) => {
//     if (b > a) return -1;
//   });

//   console.log(sortnum[0]);
// };

//Method two
let findMin = (arr) => {
  let sortnum = Math.min(...arr);
  console.log(sortnum);
};

findMin([100, -1, 30, -10, 20, 200]);
