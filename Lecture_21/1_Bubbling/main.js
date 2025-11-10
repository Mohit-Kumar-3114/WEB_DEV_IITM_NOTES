// BUBBLING IN JS
// Event Bubbling in JavaScript means that when an event (like a click) happens on an element inside 
// another element, the event first runs on the innermost element and then “bubbles up” to its ancestors 
// (parent → grandparent → up to document).

let grandfather = document.querySelector("#grandfather")
let father = document.querySelector("#father")
let child = document.querySelector("#child")

grandfather.addEventListener("click", function(){
    console.log("grandfather is called")
})

father.addEventListener("click", function(){    
    console.log("father is called")
})

child.addEventListener("click", function(){    
    console.log("child is called")
})



