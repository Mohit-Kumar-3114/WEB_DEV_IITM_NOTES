let url = "https://api.themoviedb.mp4/"

function movieChecker(url){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
         if(url.includes("mp4")){
            resolve("movie mil gyi")
         }
         else {
            reject("url thik krke de")
         }
        },4000)
    })
}

movieChecker(url)
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("movie ka url hmne check kr lia h") /// hmesha execute hoga
})