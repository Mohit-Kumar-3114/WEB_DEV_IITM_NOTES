// FUNCTIONS IN JS
// Functions are reusable piece of code that are executed when someone call them

// 1. Function Declaration
function greet(){
   console.log("hello good afternoon")
}
// call krne ka tarika
greet() 


function addition(a,b){ // parameters
    return a+b
}

let ans = addition(2,3) // arguements
console.log(ans)


function subtract(a,b){
    return a-b
}

console.log(subtract(5,2))




// 2, Function Expression
let greet2 = function (){
    console.log("hi there")
}

greet2()




// 3, Arrow Function
let greet3 = () => {
    console.log("hi there from greet3")
}

greet3()


let add = (a,b) => {
    return a+b
}
console.log(add(2,3))


