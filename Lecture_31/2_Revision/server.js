const express = require("express")
const app = express()

app.use(express.json()) 

let movies = [
    {
        name: "Bahubali",
        actor: "Parbhat",
        releasedYear: "2020"
    },
    {
        name: "Krish",
        actor: "Ritik Roshan",
        releasedYear: "2015"
    },
    {
        name: "Dangal",
        actor: "Amir Khan", 
        releasedYear: "2019"
    }
]


app.get("/movies", function(req, res){
    res.send(movies)
})


app.get("/movie/:name", function(req, res){
    const name = req.params.name

    for(let i=0; i<movies.length; i++){
        if(movies[i].name == name){
           res.send(movies[i])
        }
    }
    res.send("movie not found with this name")
})


// app.get("/movie", function(req, res){
//     const name = req.query.name

//     for(let i=0; i<movies.length; i++){
//         if(movies[i].name == name){
//            res.send(movies[i])
//         }
//     }
//     res.send("movie not found with this name")
// })


app.post("/add_movie", function(req,res){
    let name = req.body.name
    let actor = req.body.actor
    let releasedYear = req.body.releasedYear

    // movies.push({
    //     name: name,
    //     actor: actor,
    //     releasedYear: releasedYear
    // })

    movies.push({
        name,
        actor,
        releasedYear
    })
    res.send("movie added successfully")
})


app.put("/update_movie/:name", function(req, res){
    let name = req.params.name
    let releasedYear = req.body.releasedYear
    for(let i=0; i<movies.length; i++){
        if(movies[i].name == name){
          movies[i].releasedYear = releasedYear
          res.send("movie updated successfully")
        }
    }  
    res.send("movie not found")
})


app.delete("/delete_movie/:name", function(req, res){
    let name = req.params.name
    let index;
    for(let i=0; i<movies.length; i++){
        if(movies[i].name == name){
            index = i
        }
    }
    movies.splice(index, 1)
    res.send(movies)
})


app.listen(3000, function(){
    console.log("Server has started on 3000 port..")
})





