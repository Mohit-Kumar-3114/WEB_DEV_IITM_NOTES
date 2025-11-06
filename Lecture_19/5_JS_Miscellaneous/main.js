let arr = [1,2,3,4,5,6,7,8,9]

let ans = arr.find(function(item){
    return item % 3 == 0
})
console.log(ans) // 3

let ansArray = arr.filter(function(item){
   return item % 3 == 0
})

console.log(ansArray) // [ 3, 6, 9 ]


let newArr = arr.map(function(item){
   return item*2
})

console.log(newArr) // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]




// JSON IN JS
// SON stands for JavaScript Object Notation. JSON is a text format for storing and 
// transporting data. It is basically used to convert objects to strings or strings 
// to objects.

// JSON doesn't support functions because functions are executable code, and JSON's 
// purpose is to describe data, not behavior. 

let obj = {
    age:19,
    name:"jatin",
    fun: function(){
        console.log("hlo")
    }
}

let stringfyObj = JSON.stringify(obj)
console.log(stringfyObj) // {"age":19,"name":"jatin"}

let decodedObj = JSON.parse(stringfyObj)
console.log(decodedObj) // { age: 19, name: 'jatin'}




let num = 10
console.log(num.toString(2)) // 1010 in binary 

console.log(num.toString(8)) // 12 in octal

console.log(num.toString(16)) // a in hexadecimal

let binaryNum = "1010"
console.log(parseInt(binaryNum, 2)) // 10

let octalNum = "12"
console.log(parseInt(octalNum,8)) // 10

let hexaNum = "ab"
console.log(parseInt(hexaNum, 16)) // 171





console.log(isNaN("abc")) // true
console.log(isNaN(23)) // false
console.log(isNaN("23")) // false
console.log(isNaN("")) // false
console.log(isNaN(false)) // false



console.log(isFinite(23)) // true
console.log(isFinite(23/"3")) // true
console.log(isFinite(23/0)) // false
console.log(isFinite(23/true)) // true
console.log(isFinite(23/false)) // false
console.log(isFinite(23/(21%7))) // false



// IIFE 
// IIFE stands for Immediately Invoked Function Expression. It is a function that 
// is executed immediately after it is defined. 
// IIFE is used to avoid global scope pollution.
(function greet(){
    var a = 10
    console.log("hi there") // hi there
})()

console.log(a) // ReferenceError: a is not defined