var a = 2;

foo(); // 'foo()' declaration is hoisted to the top of source code

try {
  bar();
} catch (ex) {
  console.log(ex.message);
}

function foo() {
  b = 3;
  console.log(b);
  var b; // 'b' declaration is hoisted to the top of function 'foo'
}

/* jshint ignore:start */
/* eslint-disable */
function bar() {
  c = 3;
  console.log(c);
  let c; // 'c' declaration using 'let' is not hoisted
}
/* eslint-enable */
/* jshint ignore:end */

console.log(a);

try {
  console.log(b);
} catch (ex) {
  console.log(ex.message);
}
