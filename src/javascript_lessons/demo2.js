// const doc = doctorize("venkat");
// console.log(doc);
// function doctorize(firstName) {
//   return `Dr.${firstName}`;
// }
// Anonymous function
// function (firstName){
//     return `Dr.${firstName}`;

// }
// function expression
const doctorize = function (firstName) {
  return `Dr.${firstName}`;
};
const doc = doctorize("venkat");
console.log(doc);
// arrow functions
const inchToCM = (inches) => {
  console.log(inches);
  return inches * 2.54;
};
const resultcm = inchToCM(10);
console.log(resultcm);
const functiona = () => {
  console.log("hi");
};
functiona();
const add = (a, b = 3) => a + b;
const inTocm = (inches) => inches * 2.54;
console.log(add(100));
console.log(inTocm(25));
//

const makeAperson = (first, last) => ({ name: `${first}${last}`, age: 0 });
const person = makeAperson("mahesh", "waran");
console.log(person);
//self calling function
(function (age) {
  console.log(`you are cool and your age is ${age}`);
})(10);
// object methods

const employee = {
  name: "mahesh",
  sayHi: function () {
    console.log(`hi!!!${this.name}`);
    return `hi!!!${this.name}`;
  },
  print: () => {
    console.log("hello employee");
  },
  yellHi() {
    console.log(`Hi ${this.name.toUpperCase()}`);
  },
};
employee.sayHi();
employee.print();
employee.yellHi();
