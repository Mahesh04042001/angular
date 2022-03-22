class Pizza {
  //constructor
  constructor(toppings = [], customer) {
    this.toppings = toppings;
    this.customer = customer;
  }
  //static property
  static extraToppings = ["pepperoni", "chees"];
  //instance variable
  slice = 10;
  set noOfSlices(value) {
    this.slice = value;
  }
  get noOfSlices() {
    return this.slice;
  }
  //method
  eat() {
    console.log(this.toppings);
    console.log(this.customer);
  }
  //staic method
  static sayThankyou() {
    console.log("thankYou!!");
  }
  getCokeOrPepsi = () => {
    console.log("coke");
    console.log("pepsi");
    console.log(this);
  };
  //private field or variable can only be modified inside a class
  #bankBalance = 10000;
  get balance() {
    return this.#bankBalance;
  }
  set balance(value) {
    this.#bankBalance = value;
  }
}
const myLaunch = new Pizza(["onion", "mushroom", "capsicum"], "venkat");
// console.log(myLaunch);
myLaunch.eat();
myLaunch.toppings = ["carrot", "almonds", "lobster"];
console.log(myLaunch.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings = ["onion", "lettuce"];
console.log(Pizza.extraToppings);
Pizza.sayThankyou();
console.log(myLaunch.noOfSlices);
console.log((myLaunch.noOfSlices = 40));
myLaunch.getCokeOrPepsi();
myLaunch.slice = 12;
console.log(myLaunch.noOfSlices);
console.log(myLaunch.balance);
myLaunch.balance = 5000;
myLaunch.balance = 8000;

console.log(myLaunch.balance);
