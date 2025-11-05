
let singleDiv = document.querySelector("div")
console.log(singleDiv) // pura ka pura div agya 
console.log(singleDiv.classList) // jitni classes h unhe as an array de dega
console.log(singleDiv.className) // class ka name de dega






let allMovies = document.querySelectorAll(".movie")
console.log(allMovies)
console.log(allMovies[0].attributes) // give all attributes




let movieList = document.querySelector("#movieList")
console.log(movieList)
console.log(movieList.firstElementChild) // phla element child de dega
console.log(movieList.lastElementChild) // last element child de dega
console.log(movieList.firstChild) // phla child de dega
console.log(movieList.lastChild) // last child de dega
console.log(movieList.firstElementChild.nextElementSibling) // next element sibling de dega
console.log(movieList.lastElementChild.previousElementSibling) // previous element sibling de dega
console.log(movieList.firstElementChild.previousElementSibling) // null




let d2 = document.getElementById("d2")
console.log(d2)
console.log(d2.innerHTML) // inner html de dega including all the tags
console.log(d2.innerText) // inner text de dega without any tags
console.log(d2.tagName) // tag name de dega
console.log(d2.textContent) // text content de dega without any tags





let d3 = document.getElementById("d3")
console.log(d3)
console.log(d3.innerHTML) 
console.log(d3.innerText)
console.log(d3.textContent)
console.log(d3.firstElementChild.tagName)
console.log(d3.firstChild.tagName)


// 1. innerText- Gets/sets the visible text of an element, excluding hidden elements.
// 2. innerHTML- Gets/sets the HTML content inside an element, including HTML tags.
// 3. textContent- Gets/sets the text content of an element, including hidden elements.
// 4. tagName- Returns the name of the tag (in uppercase) of the selected element, such as "DIV" or "SPAN"