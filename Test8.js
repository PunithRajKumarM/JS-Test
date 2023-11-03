// Question 8
// multiply(1)(2)(3)(4)(5)(6)()

const multiply = (a) => {
  return (b) => {
    if (typeof b !== "undefined") {
      return multiply(a * b);
    } else {
      return a;
    }
  };
};

const res = multiply(1)(2)(3)(4)(5)();
console.log(res);
