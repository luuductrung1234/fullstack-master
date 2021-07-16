var teacher = "Kyle";

var teacherInClass01 = function () {
  var teacher = "Yen";
  console.log(teacher);
};

// IIFE
(function teacherInClass02() {
  var teacher = "Suzy";
  console.log(teacher);
})();

// IIFE
(() => {
  var teacher = "Tom";
  console.log(teacher);
})();

// IIFE
(function () {
  var teacher = "Jerry";
  console.log(teacher);
})();

teacherInClass01();

console.log(teacher);
