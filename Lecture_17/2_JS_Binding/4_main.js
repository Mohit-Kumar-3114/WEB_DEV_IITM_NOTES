// 4. New Keyword Binding
// New keyword is used to create a new object and bind the function to the object.

function person(name,age){
    this.name = name
    this.age=age
}

let p1 = new person("jatin",20)
let p2 = new person("vansh", 19)
console.log(p1, p2)

// we can update and add new properties to the object
p1.name = "mohit"
p1.hobby = "cricket"
console.log(p1)