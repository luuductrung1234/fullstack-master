function ask(question) {
  setTimeout(function waitASec() {
    // scope require a variable ("question") from the outer scope
    // this make the outer scope still exist, and wait for this code below to execute
    console.log(question);
  }, 2000);
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
