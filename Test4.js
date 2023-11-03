// Question 4
// Reverse the string without using any built-in array methods

function reverseString(str) {
  let word = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      word += str[i];
    } else {
      reversedStr = word + " " + reversedStr;
      word = "";
    }
  }
  reversedStr = word + " " + reversedStr;
  return reversedStr.trim();
}

let str = "I am Punith Raj Kumar";
let result = reverseString(str);
console.log(result);
