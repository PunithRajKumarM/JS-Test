// Question 9
// Write a generic function to modify given input to specified output
// input :
// let user = {
//   name: 'john',
//   address: {
//     home: {
//       city: 'Bangalore',
//       area: 'Jayanagar',
//     },
//     office: {
//       city: 'Mumbai',
//       area: 'Bandra',
//     },
//   },
// };

// output:
//  let output = {
//   user_name : 'john',
//   user_address_home_city : 'Bangalore',
//   user_address_home_area : 'Jayanagar',
//   user_address_office_city: 'mumbai',
//   user_address_office_area: 'bandra',
// };

let user = {
  name: "John",
  address: {
    home: {
      city: "Bangalore",
      area: "Jayanagar",
    },
    office: {
      city: "Mumbai",
      area: "Bandra",
    },
  },
};

let output = {};

const transformObj = (obj, prefix) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      transformObj(obj[key], `${prefix}_${key}`);
    } else {
      key = key.toLowerCase();
      output[`${prefix}_${key}`] = obj[key].toLowerCase();
    }
  }
  return output;
};

console.log(transformObj(user, "user"));
console.log(typeof user);
