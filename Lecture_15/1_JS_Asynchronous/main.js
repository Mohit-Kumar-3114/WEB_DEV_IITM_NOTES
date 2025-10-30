// Example of Synchronous Programming
function ourAddedDelay(){
    let prevTime = new Date().getTime()
    while(new Date().getTime() - prevTime < 5000){

    }
}
ourAddedDelay()
console.log("hi there")
console.log("hi there 2")
console.log("hi there 3")
// This is synchronous programming which means that the code is executed line by line and 
// the next line is executed only after the previous line is executed. so the 
// console.log("hi there") , console.log("hi there 2") , console.log("hi there 3") are 
// executed one by one but after 5 seconds because of the ourAddedDelay function.

// This is a problem because it freezes the browser and blocks the main thread meaning the 
// UI becomes unresponsive, and no other tasks can be handled (like user input or animations).
// That's why we use asynchronous programming (like setTimeout, Promises, or async/await)
// to delay or wait without blocking the main thread.




// Example of Asynchronous Programming
function greet(){
    console.log("hi from greet")
}

function sayHello(){
    console.log("hello")
}
setTimeout(greet,2000)
setTimeout(sayHello,4000)

console.log("hi there")
console.log("hi there 2")
console.log("hi there 3")

// This is asynchronous programming.
// When JavaScript encounters an asynchronous operation — such as setTimeout, fetch, or 
// addEventListener — it first recognizes that this function is asynchronous. Instead of 
// running it immediately in the call stack, JavaScript delegates it to the Web API 
// (in browsers).

// The Web API acts as an interface layer between JavaScript and the browser’s built-in 
// features like timers, network requests, or DOM events. It exists because JavaScript 
// itself doesn’t have direct access to these browser functionalities as they come from the
// Browser Object Model (BOM).

// So when an async function like setTimeout() is called, it’s moved out of the call stack 
// and handled by the Web API. JavaScript doesn’t wait for it; instead, it continues 
// executing the remaining synchronous code. Once the timer or async task completes, the
// Web API sends its callback function to the callback queue.

// The event loop then keeps checking — if the call stack is empty, it pushes that callback 
// from the queue to the stack for execution. This way, asynchronous tasks run after all 
// the synchronous code has finished, without blocking the main thread.
