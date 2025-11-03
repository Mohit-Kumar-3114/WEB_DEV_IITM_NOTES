// 3. Explicit Binding
// Explicit binding is a process of binding the function to the object.
// There are 3 types of explicit binding in JS:
// 1. call() => immediaely function ko invoke krta h or arguments comma se separated hote h 
// 2. apply() => immediaely function ko invoke krta h or arguments aas an array pass krte h
// 3. bind() => function lo return krta h or arguments comma se separated hote h 


function person(){
    console.log(this.name)
    console.log(this.age)
}

let obj1 = {
    name: "jatin",
    age: 19
}

let obj2 = {
    name: "vansh",
    age: 20
}

person.call(obj1)
person.call(obj2)



function car(purchasingYear, documentVerified){
    console.log(this.name)
    console.log(this.color)
    console.log(purchasingYear)
    console.log(documentVerified)
}

let c1 = {
    name: "BMW",
    color: "red"
}

car.call(c1,"2024",true)
car.apply(c1,["2024",true])
let returnedFunc = car.bind(c1,"2023",false)
returnedFunc()
