// HIGHER ORDER FUNCTIONS IN JS
// Higher order functions are functions that take other functions as arguments or return 
// functions as their results.

function calculation(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(calculation(2, 3, add));      // 5
console.log(calculation(2, 3, multiply)); // 6
// calculation is higher order function and add & multiply are callback functions





function greet(){
    return function(){
        console.log("hi there")
    }
}

let result = greet()
result() // hi there