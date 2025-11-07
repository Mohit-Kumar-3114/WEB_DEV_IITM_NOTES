//  Debouncing is a technique where a function is executed only after a certain amount of time has
//  passed since the last event.

let input = document.querySelector("#i1")
let id


function debounce(value,delay){
    clearTimeout(id)
    id = setTimeout(function(){
        console.log(value)
        // fetch data 
    },delay) 
}

input.addEventListener("input", function(e){ 
   debounce(e.target.value, 1000)
})





 

