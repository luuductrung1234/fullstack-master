function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, `- ${question}`);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");
// the object that was created is going to be linked to Workshop.prototype

deepJS.ask("Is 'prototype' a class?"); // delegate to Workshop.prototype

reactJS.ask("Isn't 'prototype' ugly?"); // delegate to Workshop.prototype

var customPrototype = {
  ask: function (question) {
    console.log(this.teacher, `- ${question}`);
  },
};

var frontEndWorkshop = Object.create(customPrototype);
// the object that was created is going to be linked to customPrototype

frontEndWorkshop.teacher = "Tom";

frontEndWorkshop.ask("Can I learn JavaScript's prototype much deeper?"); // delegate to customPrototype

// 'Object.create()' and 'new' keyword is work as the same
