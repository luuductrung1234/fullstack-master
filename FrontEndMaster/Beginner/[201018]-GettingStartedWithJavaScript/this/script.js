// Implicit Binding Rule

var workshop = {
  teacher: "Tom",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("What is implicit binding?");

// Explicit Binding Rule

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy",
  };
  ask.call(myContext, "What is explicit binding?");
}

otherClass();
