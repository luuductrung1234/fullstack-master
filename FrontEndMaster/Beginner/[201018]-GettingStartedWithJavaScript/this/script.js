function ask(question) {
  console.log(this.teacher, question);
}

// Implicit Binding Rule

var teacher = "Trump";

var workshop1 = {
  teacher: "Tom",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop1.ask("What is implicit binding?");

ask("Who is 'this' refer to?"); // in strict mode, 'this' would be undefined

new ask("Why 'this' is dynamic?"); // in strict mode, 'this' would be undefined

// Explicit Binding Rule

function workshop2() {
  var context = {
    teacher: "Suzy",
  };
  ask.call(context, "What is explicit binding?");
}

workshop2();

var workshop3 = {
  teacher: "Lav",
};

ask.call(workshop3, "Is this work as I'm expected");
