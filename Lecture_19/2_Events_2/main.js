let btn = document.querySelector("button")
let para = document.querySelector("p")

// all functions given to addEventListener are executed when the event occurs
btn.addEventListener("click",function(){
   console.log("button is clicked using 1st function")
})

btn.addEventListener("click",function(){
   console.log("button is clicked using 2nd function")
})

function handler(){
    console.log("button is clicked using 3rd function")
}

btn.addEventListener("click",handler)

function handler2(){
    console.log("button is clicked using 4th function")
}

btn.addEventListener("click",handler2)

// we have to pass same function to removeEventListener to remove the event
btn.removeEventListener("click",handler2)

// this will not work because we are passing a different function to removeEventListener
// btn.removeEventListener("click",function(){
//    console.log("button is clicked using 1st function")
// })

