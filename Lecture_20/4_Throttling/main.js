// Throttling is a technique in which, no matter how many times the user fires the event, the attached 
// function will be executed only once in a given time interval.


let btn = document.querySelector("button")

function throtlling(){
    console.log("details has submitted")
}

let lastClick = 0 

btn.addEventListener("click", function(){
    let now = new Date().getTime() 
    console.log(lastClick)
    console.log(now)
    if(now - lastClick > 5000){
      throtlling()
      lastClick = now
    }
    else {
        console.log("time to hone de wait kr le thoda")
    }
})



