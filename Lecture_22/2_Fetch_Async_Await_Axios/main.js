let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")


let city="delhi"
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63cb9f6f0482d7f61376edf323f1d739`;




// FETCH API USING PROMISES
btn1.addEventListener("click",function(){
    fetch(url) // fetch data from api and return a promise so we can use .then to handle the resolved state
    .then(function(data1){
       return data1.json() // data1.json() returns a promise so we can use .then to handle the resolved state
    })
    .then(function(data2){
     console.log(data2) // data2 is final javascript object containing weather data
    })

})

    


// FETCH API USING  ASYNC AWAIT
btn2.addEventListener("click", async function(){
    let data1 = await fetch(url) // fetch data from api and return a promise so we can use await to wait for the promise to resolve
    let data2 = await data1.json() // data1.json() returns a promise so we can use await to wait for the promise to resolve
    console.log(data2) // data2 is final javascript object containing weather data
})




// AXIOS using promises
btn3.addEventListener("click", function(){
    axios.get(url) // axios.get() returns a promise so we can use .then to handle the resolved state
    .then(function(res){
        console.log(res.data) // res.data is final javascript object containing weather data
    })

})




// AXIOS using async await
btn4.addEventListener("click", async function(){
   let res = await axios.get(url) // axios.get() returns a promise so we can use await to wait for the promise to resolve
   console.log(res.data) // res.data is final javascript object containing weather data
})