function ask(question) {
  setTimeout(function waitASec() {
    // scope require a variable ("question") from the outer scope
    // this make the outer scope still exist, and wait for this code below to execute
    console.log(question);
  }, 1000);
  console.log("function 'ask' is finished");
}

ask("What is closure?");

function tellMeHowToCode(language) {
  console.log("you have learn these things!");
  return function learnSomeCoreConcepts() {
    console.log(`learn core concept of ${language}`);
  };
}

var suggestion = tellMeHowToCode("JavaScript");
suggestion();

function makeAdder(x) {
  return (y) => {
    return x + y;
  };
}

var addOne = makeAdder(1);
var addTen = makeAdder(10);

console.log(addOne(1));
console.log(addTen(5));
console.log(addTen(24));
