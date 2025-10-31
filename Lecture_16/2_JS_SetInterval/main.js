//  setInterval is a function that calls a function after a specified time but it keeps 
//  calling the function until we clear the interval
//  it returns a unique identifier
//  we can clear the interval using the clearInterval function

let id = setInterval(function(){
    console.log("yr class attend kiya kro sab log ...")
},3000)

setTimeout(function(){
    clearInterval(id)
},10000)

