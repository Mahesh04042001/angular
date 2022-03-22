function doSomeTask() {
  const x = 100;
  const y = 20;
  console.log("x:" + x + "y:" + y);
}
doSomeTask();
//----------------------
function outer() {
  const outerVar = "hey i am the outer var!";
  //   console.log(outerVar);
  function inner() {
    const innervar = "hey i am the inner var!";
    console.log(innervar);
    console.log(outerVar); //closure captured variable.
  }
  //console.log(innervar); uncaught reference error
  //   inner();
  return inner;
}
// outer();
// inner();
const innerFunc = outer();
innerFunc();
//-------------------
function createGreetings(greetings = "") {
  const myGreat = greetings.toUpperCase();
  return function (name) {
    return `${myGreat} ${name}`;
  };
}
const ex = createGreetings("hello");
console.log(ex("mahesh"));
const sayHello = createGreetings("hello");
const sayVanakkam = createGreetings("vanakkam");
console.log(sayHello("mahesh"));
console.log(sayVanakkam("waran"));
console.log(sayVanakkam("mahesh"));
//--------------------------
function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}
const name1 = createGame("freefire");

console.log(name1());
console.log(name1());
const hockeyGame = createGame("Hockey");
const soccerGame = createGame("Soccer");
console.log(hockeyGame());
console.log(hockeyGame());
console.log(hockeyGame());
console.log(soccerGame());
