// VARIABLES IN JAVASCRIPT

// Variable Names Are Case-Sensitive
name = "mohit";
Name = "sumit";
NAME = "JATIN";

console.log("name"); // name (string)
console.log(name);   // mohit
console.log(Name);   // sumit
console.log(NAME);   // JATIN




// Variables with Special Characters
$ = 10;
console.log($); // 10




// VAR, LET, CONST BASICS

// Example 1: Using const
const a = 10;
console.log(a); // 10
// a = 20; TypeError: Assignment to constant variable


// Example 2: Using let
let b = 20;
console.log(b); // 20
b = 30; // value can be changed
console.log(b); // 30


// Example 3: Using var
var c = 40;
console.log(c); // 40
c = 50; // value can be changed
console.log(c); // 50




// SCOPE EXAMPLES
if (true) {
    let x = 10;     // block scoped
    var y = 30;     // function/global scoped
    const z = 40;   // block scoped
    console.log(x); // 10
    console.log(y); // 30
    console.log(z); // 40
}

// console.log(x); // Error: x is not defined
console.log(y);     // 30 (var leaks outside the block)
// console.log(z); // Error: z is not defined




// Redeclaration Example
var m = 10;
var m = 20; // var allows redeclaration
console.log(m); // 20

// let n = 10;
// let n = 20; // Error: Identifier 'n' has already been declared

// const p = 10;
// const p = 20; // Error: Identifier 'p' has already been declared



