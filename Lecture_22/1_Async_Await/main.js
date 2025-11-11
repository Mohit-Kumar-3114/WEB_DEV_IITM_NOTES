async function abc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello from abc");
        }, 1000);
    });
}

console.log("hi 1")

// async keyword is used to define an asynchronous function
async function wrap(){

// 'await' pauses the execution of wrap() until abc() is resolved
let ans = await abc()
console.log(ans)
console.log("hi 3")
}
wrap()

console.log("hi 2")

// Output 
// hi 1
// hi 2
// after 1 second: Hello from abc
// hi 3


