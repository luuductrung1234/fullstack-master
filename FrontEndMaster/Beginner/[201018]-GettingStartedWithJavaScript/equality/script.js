var name1 = "Tom";
var name2 = `${name1}`;

var number1 = 16;
var number2 = number1 + 0;

console.log("Equality");

console.log("String");
console.log(name1 == name2);
console.log(name1 === name2);

console.log("Number");
console.log(name1 == name2);
console.log(number1 == number2);
console.log(number1 === number2);

var workshop1 = { topic: null };
var workshop2 = {};

console.log("Null with Undefined");
console.log(workshop1.topic == null);
console.log(workshop1.topic == undefined);
console.log(workshop1.topic === null);
console.log(workshop1.topic === undefined);

console.log(workshop2.topic == null);
console.log(workshop2.topic == undefined);
console.log(workshop2.topic === null);
console.log(workshop2.topic === undefined);
