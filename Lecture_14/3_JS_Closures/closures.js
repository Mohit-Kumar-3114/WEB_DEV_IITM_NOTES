// CLOSURES IN JS
// Closures are functions that have access to the variables of their parent scope even after the 
// parent function has returned.


// var global scoped hota hai but agr usse function ke andar define karte hai toh usko 
// function scoped kehte hai or uski hoisting bhi function scoped hoti hai matlab ki 
// usko top of the function pe le jata hai.


function Parent(){
    var x = 1;
    function Child(){
        x++;
        console.log(x);
    }
    return Child;
}

let f = Parent(); // f is a closure
console.log(f)
let f1 = Parent(); // f1 is a closure
console.log(f1)
console.log(f == f1); // false because each call to Parent() creates a new function in 
// memory, so f and f1 have different references.


f(); // 2 
f(); // 3
f(); // 4

f1(); // 2
f1(); // 3
f1(); // 4  