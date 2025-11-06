// EVENTS IN JS
// Events in JavaScript are actions or occurrences that happen in the browser — 
// like when a user clicks a button, moves the mouse, types something.

let btn = document.querySelector("button")
let para = document.querySelector("p")

btn.onclick = () => {
    console.log("button is clicked using 1st function")
}

// second function is overriding the first function
btn.onclick = () => {
    console.log("button is clicked using 2nd function")
}

// para.onmouseenter = () => {
//     para.style.backgroundColor = `red`
// }

// para.onmouseleave = () => {
//    para.style.backgroundColor = `green`
// }


let x = true
setInterval(function(){
    x = !x
    if(x){
       para.style.backgroundColor = "orange"
    }
    else {
          para.style.backgroundColor = "yellow"
    }
 
},1000)