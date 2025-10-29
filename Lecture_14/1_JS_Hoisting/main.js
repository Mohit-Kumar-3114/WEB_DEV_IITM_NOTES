// HOISTING IN JS
// Hoisting is a process in which the variables and functions declarationsare moved to the 
// top of their scope before the code execution.

console.log(x) // undefined
var x = 10;
// This is interpreted as:
// var x;
// console.log(x);
// x = 10;

// const and let are also hoisted but remain in a temporal dead zone (TDZ) until 
// the declaration is reached. Hence, they show ReferenceError ie cannot access before 
// initialization.




// Function declarations are also hosited 
greet()
function greet(){
    console.log("hlo world")
}
// This is interpreted as:
// function greet(){
//     console.log("hlo world")
// }
// greet()




// x() // ReferenceError: x is not a function
var x = function(){
    console.log("hlo world")
}
x() // hlo world
// This is interpreted as:
// var x
// x()
// x = function(){
//     console.log("hlo world")
// }

