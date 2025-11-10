// CAPTURING IN JS
// Event Capturing in JavaScript means that when an event (like a click) happens on an element inside 
// another element, the event first runs on the outermost element and then “captures” down to its 
// descendants (grandfather → father → child).

let grandfather = document.querySelector("#grandfather")
let father = document.querySelector("#father")
let child = document.querySelector("#child")


grandfather.addEventListener("click", function(){
    console.log("grandfather is called")
}, true)

father.addEventListener("click", function(){    
    console.log("father is called")
}, true)

child.addEventListener("click", function(){    
    console.log("child is called")
}, true)