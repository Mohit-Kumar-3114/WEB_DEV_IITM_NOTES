// PROMISES IN 
// Promises in JavaScript are a way to handle asynchronous operations (like API calls, 
// file downloads, or setTimeout) without falling into callback hell.
// It have 3 states: pending, resolved, rejected
// pending: initial state, neither resolved nor rejected
// resolved: operation completed successfully
// rejected: operation failed
// .then is used to handle the resolved state
// .catch is used to handle the rejected state



let sumitNeChocolateDedi = false

let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        if(sumitNeChocolateDedi){
            resolve("Promise pura kr dia h sumit ne ")
        }
        else {
            reject("Bhag yhna se sumit!")
        }
    },2000)
})
p.then(function(data){
   console.log(data)
})
.catch(function(error){
    console.log(error)
})
