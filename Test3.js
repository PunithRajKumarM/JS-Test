// Question 3
// Check if given string is palindrome
let string = "Malayalam";
let palindrome = string.split("").reverse().join("");
if (string.toLowerCase() === palindrome.toLowerCase()) {
  console.log("It's a palindrome");
} else {
  console.log("It's not a palindrome");
}
