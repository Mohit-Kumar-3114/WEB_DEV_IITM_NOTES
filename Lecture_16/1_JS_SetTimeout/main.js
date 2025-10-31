//  setTimeout is a function that calls a function after a specified time
//  it returns a unique identifier
//  we can clear the timeout using the clearTimeout function

let id = setTimeout(function (){
    console.log("kse ho sab log...")
},3000)

setTimeout(function(){
    clearTimeout(id)
},2000)

console.log(id)











