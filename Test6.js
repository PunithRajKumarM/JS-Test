// Question 6
// Create the function called printC(), which accepts the number as input. This function basically prints the following C pattern.

let n = Number(prompt("Enter the number"));
let str = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j == 1 || i == 1 || i == n) {
      str = str + "* ";
    }
  }
  str = str + "\n";
}

console.log(str);
