function orderPlacing(callback){
    console.log("you have ordered something")
    setTimeout(function(){
        console.log("order placed successfully")
        callback()
    },2000)
}

function makingFood(callback){
    console.log("Hotel has started making your order")
    setTimeout(function(){
        console.log("your order has made by hotel")
        callback()
    },2000) 
}

function eatingFood(){
    console.log("Start eating food")
    setTimeout(function(){
        console.log("breakfast has completed")
    },2000)
}


orderPlacing(function(){
    makingFood(function(){
        eatingFood()
    })
})





