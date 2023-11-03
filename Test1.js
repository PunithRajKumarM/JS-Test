// Question 1
// Write a code to generate an array comprising square of every item of the passed array.
// Prototype: const squareGenerator = (initArr = [2, 7, 18, -3, 12, 5]) => { // Your Code // Return [4, 49, 324, 9, 144, 25] }

//Solution
const squareGenerator = (arr) => {
  return arr.map((e) => e ** 2);
};
let a = [2, 7, 18, -3, 12, 5];
console.log(squareGenerator(a));