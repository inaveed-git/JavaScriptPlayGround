let removeDuplicates = (arr) => {
  let unique = [...new Set(arr)];
  console.log(unique);
};

removeDuplicates([1, 5, 5]);
