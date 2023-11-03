// Question 10
// Write a generic function to modify given input to specified output
// let input = [
//   {name: 'A', age: '20'},
//   {name: 'B', age: '22'},
//   {name: 'c', age: '22'},
//   {name: 'd', age: '30'},
//   {name: 'e', age: '20'},
//   {name: 'f', age: '30'},
//   {name: 'g', age: '20'},
//   {name: 'h', age: '24'},
//   {name: 'i', age: '26'},
// ];

// output = {
//   20 : [{name: 'A', age: '20'}, {name: 'e', age: '20'}, {name: 'g', age: '20'}],
//   22 : [{name: 'B', age: '22'}, {name: 'c', age: '22'}],
//   30 : [ {name: 'd', age: '30'}, {name: 'f', age: '30'}],
//   24 : [{name: 'h', age: '24'}],
//   26 : [{name: 'i', age: '26'}],
// }

let output = {};
function ageObj(input) {
  for (let i = 0; i < input.length; i++) {
    let person = input[i];
    let age = Number(person.age);
    if (!output[age]) {
      output[age] = [];
    }
    output[person.age].push(person);
  }
  return output;
}

let input = [
  { name: "A", age: "20" },
  { name: "B", age: "22" },
  { name: "c", age: "22" },
  { name: "d", age: "30" },
  { name: "e", age: "20" },
  { name: "f", age: "30" },
  { name: "g", age: "20" },
  { name: "h", age: "24" },
  { name: "i", age: "26" },
];

let res = ageObj(input);
console.log(res);
