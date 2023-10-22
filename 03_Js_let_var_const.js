console.log("Let var Const");

var a = 45;
var b = "harry";
var c = null;
var d = undefined;

{
  var b = "this";
  console.log(b);
}
console.log(b);

{
  let b = "hola";
  console.log(b);
}
console.log(b);

var a = "Hola";
var a = "Hello";
//No Error

// let a = "Hola"
// let a = "hello"
//Error

const author = "Jack Sparrow";
// author = "ironman";
// TypeError: Assignment to constant variable.

// const num;
// num = 4;
// SyntaxError: Missing initializer in const declaration
