let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let d1 = document.getElementById("d1")


b1.addEventListener("click",() => {
   let currentValue = parseInt(d1.innerText)
   d1.innerText = ++currentValue
})

b2.addEventListener("click",() => {
   let currentValue = parseInt(d1.innerText)
   d1.innerText = --currentValue
})