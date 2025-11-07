let list = document.querySelector("#list")
let allButton = document.querySelectorAll("button")

let newButton = document.createElement("button")
newButton.innerText = "7"
list.append(newButton)




// by doing like this newButton will not trigger any event
// allButton.forEach(function(item){
//     item.addEventListener("click",function(){
//         console.log("You clicked: " + item.innerText)
//     })
// })




// Event Delegation in JavaScript is a powerful technique where instead of adding event listeners to 
// multiple child elements, you add a single event listener to their parent element.
// by doing this newButon also triger the event
list.addEventListener("click",function(event){
    if(event.target.tagName == "BUTTON"){
        console.log("You clicked: " + event.target.innerText)
    }
})