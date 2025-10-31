
function ganneKaJuicePilaDo(){
    let meraPromise = new Promise(function(resolve,reject){
        let paise = 20;
        if(paise >= 20){
            resolve("mja agya juice pikr")
        }
        else {
            reject("paise kama le fir juice pilio")
        }
    })
    return meraPromise 
}

ganneKaJuicePilaDo()
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

// create a function movieurl checker 
// give url as paramter to function
// check mp4 exist or not 
// if exist movie mil gyi
// otherise movie ka url shi krke bhj
// adds delay of 4 second 