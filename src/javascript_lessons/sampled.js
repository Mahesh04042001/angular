/* eslint-disable semi */
/* eslint no-use-before-define: "error" */
// function addNumbers (a, b) {
//   return a + b;
// }
// console.log(`2 + 3 => ${addNumbers(2, 3)}`);
// // console.log(`${multiplyNumbers(20,30)}`);
// function multiplyNumbers (a, b) {
//   return a * b;
// }
// console.log(`2 * 3 => ${multiplyNumbers(2, 3)}`);
console.log('Hi Node!!');
function callme () {
  const x = 100;
  const y = x * 2;
  if (x < 500) {
    console.log('x<500');
    const z = x + y;
    console.log(`z:${z}`);
  }
  if (y < 500) {
    console.log('y < 500');
    // let v1 = z + y;
    // console.log(`v1:${v1}`);
  }
}
console.log(callme());
