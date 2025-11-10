let btn = document.getElementById("btn");
let searchBar = document.getElementById("searchBar")
let div2 = document.getElementById("div2")
let previousCity = ""


btn.addEventListener("click", (e)=>{
    let city = searchBar.value
    if(previousCity === city){
        return
    }
    else{
        div2.innerHTML = ""

    }

    if(searchBar.value == ""){
        alert("Please enter city before searching")
        return
    }

  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63cb9f6f0482d7f61376edf323f1d739`

    // fetch data from api
    fetch(url)
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        let tempSpan = document.createElement("span")
        tempSpan.innerText = `Temperature => ${(data.main.temp - 273).toFixed(2)}°C`
        div2.append(tempSpan)
       
        let humiditySpan = document.createElement("span")
        humiditySpan.innerText = `Humidity => ${(data.main.humidity)}%`
        div2.append(humiditySpan)
    

    })    

    previousCity = city

})

