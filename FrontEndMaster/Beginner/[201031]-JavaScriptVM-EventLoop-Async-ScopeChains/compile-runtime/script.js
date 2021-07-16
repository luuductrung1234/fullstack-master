/* NODEJS :: 'a' is declared with var keyword 
is available in current module scope  */
var a = 1;

/* NODEJS :: 'b' is declared without var keyword 
is available in global scope (can be access anywhere).
Should not use this! */
b = 1;

/* CHROME :: both 'a' and 'b' are available in global scope */

function f(z) {
  /* NODEJS :: 'b' will be referenced by function 'f'
  through global scope */

  /* NODEJS :: function 'f' can not directly access 
  to variable from outer scope (e.g. 'a' inside module scope) except global scope. 
  If needed, variable(s) can be access through closure(s) */

  /* CHROME :: 'a' and 'b' will be referenced by function f()
  through global scope */

  a = 2;

  b = 2;
  c = 4;
  var d = 6;
  e = 1;

  function g() {
    a = 3;

    var e = 0; // variable shadowing
    d = 3 * d;

    function h() {
      a = 4;

      e = 1;

      var k = 2;

      d = d + k;

      return d;
    }

    /* function 'h' is a returned value of function 'g'
    and the scopes that 'h' require to run (e.g. closures, global,...)
    will be stored in 'h' definition and persisted in in-memory */
    return h;
  }

  return g();
  var e; // variable hoisting
}

var myH = f(1);

myH(); // the result is 20

a = 5;

b = 3;
