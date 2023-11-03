// Question 5

// Create a function to count the duplicate characters.
// Input: let str = "adsjfdsfsfjsdjfhacabcsbajda";
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }
// Prototype: const countDuplicateChar = (str) => { // Your Code  // Return Object}

const countDuplicateChar = (str) => {
  let output = {};
  let len = str.length;
  for (let i = 0; i < len; i++) {
    let char = str[i];
    if (!output[char]) {
      output[char] = 1;
    } else {
      output[char]++;
    }
  }

  let sortedOutput = {};
  let sortObjArray = Object.keys(output).sort();

  sortObjArray.forEach((key) => {
    sortedOutput[key] = output[key];
  });

  return sortedOutput;
};

let str = "adsjfdsfsfjsdjfhacabcsbajda";
let res = countDuplicateChar(str);
console.log(res);
