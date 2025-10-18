// OPERATORS IN JS

// Arithmetic Operator

let a = 10
let b = 5
let c = 1
let d = 1
let e = 8
let f = 10
console.log("a + b = ", a + b) // a + b = 15
console.log("a - b = ", a - b) // a - b = 5
console.log("a * b = ", a * b) // a * b = 50
console.log("a / b = ", a / b) // a / b = 2
console.log("a % b = ", a % b) // a % b = 0
console.log("a ** b = ", a ** b) // a ** b = 100000
console.log(c++) // 1 Post increment 
console.log(c) // 2
console.log(++d) // 2 Pre increment
console.log(d) // 2
console.log(e--) // 8 Post decrement
console.log(e) // 7
console.log(--f) // 9 Pre decrement
console.log(f) // 9




// Assignment Operator

let g = 20 // = is an assignment operator 
g += 10 // g = g + 10
console.log(g) // 30

g -= 20 // g = g - 20
console.log(g) // 10

g *= 2 // g = g * 2
console.log(g) // 20

g /= 5 // g = g / 5
console.log(g) // 4

g **= 2 // g = g ** 2
console.log(g) // 16

g-- 
console.log(g) // 15

--g 
console.log(g) // 14




// Comparison Operator
// either tur or false

let h = 10
let i = 10
console.log("h == i => ",h == i) // true
console.log("h > i => ", h > i) // false
console.log("h < i => ", h < i) // false
console.log("h >= i => ", h >= i) // true
console.log("h <= i => ", h <= i) // true
console.log("h != i => ", h != i) // false


let j = "10"
console.log("i == j => ", i == j) // true (only value check)
console.log("i === j => ", i === j) // false (value + type both check)
console.log("i != j => ", i != j) // false
console.log("i !== j => ", i !== j) // true




// Logical Operator

let sumitMarks = 90
let saniyaMarks = 60

if(sumitMarks > 80 &&  saniyaMarks > 80){ // runs only if both true
  console.log("both are topper")
}
else {
    console.log("both are average")
}

if(sumitMarks > 80 || saniyaMarks > 80){ // runs if any one true
  console.log("both are topper")
}
else {
    console.log("both are average")
}

let age = 18 
if(!(age >= 18)){ // 1 reverse the statement
    console.log("adult")
}
else {
    console.log("child")
}




// Bitwise operator

let k = 12 // 01100  
let l = 21 // 10101

console.log("k & j = ", k & l) // 4 (00100) and
console.log("k | j = ", k | l) // 29 (11101) or
console.log("k ^ j = ", k ^ l) // 25 (11001) xor
