let allList = document.getElementById("allList")
let btn = document.getElementById("b1")


btn.addEventListener("click", () => {
  let newLi = document.createElement("li")
  newLi.innerText = Math.floor(Math.random()*1000)
  allList.after(newLi)
})
 

// append() is used to add a new element to the end of the list
// prepend() is used to add a new element to the beginning of the list
// before() is used to add a new element before a specific element
// after() is used to add a new element after a specific element
