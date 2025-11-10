// Prototype in JS
// In JavaScript, prototypes are a mechanism by which objects inherit properties and methods from other objects. 
// Every JavaScript object has an internal property called [[Prototype]], which points to another object. This
// other object is called the object's prototype.

let obj = {
    name: "vansh", 
    age: 20,
    fun: function(){
        console.log("hlo from vansh")
    }
}

const p1 = Object.create(obj) // p1 is a prototype of obj
console.log(obj) // { name: 'vansh', age: 20, fun: [Function: fun] }
console.log(p1) // {} because p1 is empty but it has a prototype of obj
console.log(p1.name) // vansh
p1.fun() // hlo from vansh

p1.name = "manish" // this will create a new property in p1 and not in obj
console.log(obj) // { name: 'vansh', age: 20, fun: [Function: fun] }
console.log(p1) // { name: 'manish'}




// In JavaScript, rest parameters allow a function to accept an indefinite number of arguments as an array. This is 
// useful when the exact number of arguments a function will receive is unknown. The syntax for rest parameters uses
// three dots (...) followed by the parameter name.
// function add(a, b, ...rest) { } // Valid
// function add(...rest, a, b) { } // Error

function add(a,b, ...arr){
    console.log(arr) // [ 3, 4, 5, 6 ]
    return a+b
}

console.log(add(1,2,3,4,5,6)) // 3




// The spread operator in JavaScript is represented by three dots (...). It allows expanding an iterable (like an 
// array, string, or object) into individual elements. The spread operator is widely used for tasks like combining 
// arrays, cloning objects, or passing arguments to functions.
const num1 = [1,2,3,4]
console.log(...num1) // 1 2 3 4
console.log(...num1, 4 ,5) // 1 2 3 4 4 5

const num2 = [6,7,8]
const combined = [...num1, ...num2] 
console.log(combined) // [ 1, 2, 3, 4, 6, 7, 8 ]

let str2 = "my name is vansh"
console.log(...str2) // m y   n a m e   i s   v a n s h
console.log([...str2]) // [ 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'v', 'a', 'n', 's', 'h' ]

let obj2 = {
    name:"vansh",
    age: 20,
}

let obj3 = {
    degree:"bca",
    age: 23
}

let obj4 = {...obj2}

console.log({...obj2, ...obj3}) // { name: 'vansh', age: 20, degree: 'bca', age: 23 }
console.log(obj4) // { name: 'vansh', age: 20 }
console.log(obj4 == obj2) // false as their references are different

let arr1 = [8,2,10,4,5]
console.log(Math.max(arr1)) // NaN
console.log(Math.max(...arr1)) // 10
console.log(Math.max(51, ...arr1, 32)) // 51




// Join method is used to join the elements of an array into a string.
let arr = ["manish", "mohit", "vansh"]
let newArr = arr.join(" and ")
console.log(arr)
console.log(newArr)

// Split method is used to split the string into an array of strings.
let str = "my name is vansh"
let strArr = str.split(" ")
console.log(str)
console.log(strArr)




// Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects
// into distinct variables in a clean and concise way.
const array5 = [1, 2, 3];
const [x, y, z] = array5;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

const[x1,,z1]=array5
console.log(x1); // 1
console.log(z1); // 3

const array6 = [1];
const [x3, y3 = 2] = array6;

console.log(x3); // 1
console.log(y3); // 2

const obj7 = { names: "Alice", ages: 25 };
const { names, ages } = obj7;
console.log(names); // Alice
console.log(ages);  // 25
const { names: personName, ages: personAge } = obj7;
console.log(personName); // Alice
console.log(personAge);  // 25

const obj8={names1:"Alice", ages1:23}
const{ names1 , ages1, gender1="male"}= obj8
console.log(names1) // Alice
console.log(ages1) // 23
console.log(gender1) // male
console.log(obj8) // { names1: 'Alice', ages1: 23 }




// /he reduce() method in JavaScript is used to reduce an array to a single value by executing a callback function 
// on each element of the array, from left to right. The method takes two arguments: a callback function and an 
// optional initial value. Syntax- array.reduce(callback, initialValue)
// Callback: A function that is called for each element of the array. It has the following arguments:
// 1. accumulator: The accumulated value returned from the last callback execution (or the initialValue for the 
// first iteration).
// 2. currentValue: The current element being processed in the array.
// If initial value is not given then arr[0] is treated as initial value.

const numbers = [11, 2, 13, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 30