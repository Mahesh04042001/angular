var maxvalue = Math.max(10, 12, 35, 60, 2, 55);
console.log(maxvalue);
var maxvalue = Math.min(10, 12);
console.log(maxvalue);
const floatValue = parseFloat(2);
console.log(floatValue);
const intValue = parseInt("2466afaf");
console.log(intValue);
const intValue1 = parseInt("afaf2425"); //alphanumeric doesnt work
console.log(intValue1);
let today = Date.now();
console.log(today);
function calculatebill(billamount, taxrate) {
  console.log(billamount + "-" + taxrate);
  const total = billamount + billamount * taxrate;
  return total;
}
let billtotal = calculatebill(20 + 10 + 50, 0.75);
console.log(billtotal);
function yell(name = "silly goose") {
  return `hey ${name.toUpperCase()}`;
}
let greetings = yell("mahesh");
console.log(greetings);
greetings = yell();
console.log(greetings);
function calculatebill1(billamount, taxrate = 0.13, tiprate = 0.15) {
  console.log("running caculate bill");
  console.log(
    "billamount" + billamount + "taxrate" + taxrate + "tiprate" + tiprate
  );
  const total = billamount + billamount * taxrate + billamount * tiprate;
  return total;
}
billtotal = calculatebill1(20 + 10 + 50, 0.75);
console.log(billtotal);
let billtotal2 = calculatebill1(20 + 10 + 50, undefined, 0.75);
console.log(billtotal2);
