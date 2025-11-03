function orderPlacing(){
  return new Promise(function(resolve,reject){
    console.log("you have ordered something")
    setTimeout(function(){
        console.log("order placed successfully")
        resolve()
    },2000)
  })
}


function makingFood(){
  return new Promise(function(resolve,reject){
    console.log("Hotel has started making your order")
    setTimeout(function(){
        console.log("your order has made by hotel")
        resolve()
    },2000)
  })
}

function eatingFood(){
  return new Promise(function(resolve,reject){
    console.log("Start eating food")
    setTimeout(function(){
        console.log("breakfast has completed")
        resolve()
    },2000)
  })
}

orderPlacing()
.then(makingFood)
.then(eatingFood)
.then(function(){
    console.log("everything has done")
})

