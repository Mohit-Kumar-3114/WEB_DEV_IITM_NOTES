// MICRO TASKS VS MACRO TASKS
// In JavaScript, microtasks and macrotasks are two types of queues used by the event loop to handle 
// asynchronous code: microtasks (like Promises) have higher priority and run immediately after the 
// current synchronous code finishes, while macrotasks (like `setTimeout` and events) run after 
// all microtasks are completed, even if they have zero delay.

// JavaScript does: Run synchronous code => Run all microtasks => Run one macrotask => Repeat

console.log('Start');

setTimeout(() => {
  console.log('This is a macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('This is a microtask (Promise)');
});

console.log('End');

// Output:
// Start
// End
// This is a microtask (Promise)
// This is a macrotask (setTimeout)