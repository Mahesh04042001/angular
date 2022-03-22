function car() {
  let milesDriven = 0;
  let speed = 0;
  this.accelerate = (velacity, distance) => {
    speed += velacity;
    milesDriven += distance;
  };
  this.getMilesDriven = () => milesDriven;
  this.getSpeed = () => speed;
}
const testCarModule = new car();
// console.log("Miles:" + testCarModule.getMilesDriven());
// console.log("Speed:" + testCarModule.getSpeed());
// console.log("Accelerate:" + testCarModule.accelerate(3, 100));
testCarModule.speed = 100;
testCarModule.milesDriven = 10;
console.log("Accelerate:" + testCarModule.accelerate(3, 100));

console.log("Miles:" + testCarModule.getMilesDriven());
console.log("Speed:" + testCarModule.getSpeed());
