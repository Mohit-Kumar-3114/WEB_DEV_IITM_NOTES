

let allDivs = document.querySelectorAll("div")
console.log(allDivs)

allDivs[0].style.border = `2px solid black` // set the border of the first div to 2px solid black
allDivs[0].style.backgroundColor = "red" // set the background color of the first div to red
allDivs[2].style.border = '3px solid green' // set the border of the third div to 3px solid green



let d1 = document.getElementById("d1")
d1.style.border = `3px solid blue` // set the border of the div with id d1 to 3px solid blue




let allLi = document.querySelectorAll(".movie")
console.log(allLi)

// set the border and background color of all the li elements with class movie to 2px solid green and orange respectively
allLi.forEach(function(item){
    item.style.border = "2px solid green"
    item.style.backgroundColor = "orange"
})





let d2 = document.querySelector("#d2")
d2.classList.add("newClass") // add the class newClass to the div with id d2


d2.classList.remove("c1") // remove the class c1 from the div with id d2


d2.classList.toggle("c1") // toggle the class c1 from the div with id d2
d2.classList.toggle("c2") // toggle the class c2 from the div with id d2