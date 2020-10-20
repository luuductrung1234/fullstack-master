function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");
// the object that was created is going to be linked to Workshop.prototype

deepJS.ask("Is 'prototype' a class?");

reactJS.ask("Isn't 'prototype' ugly?");
