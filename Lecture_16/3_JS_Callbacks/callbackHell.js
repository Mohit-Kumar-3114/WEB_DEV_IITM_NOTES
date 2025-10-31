// CALLBACK HELL // PYRAMID OF DOOM

//  This is a callback hell because the code is nested too deep and it is difficult to read and understand.


console.log("download has started")
setTimeout(function(){
    console.log("download has ended")
    console.log("compress has started")

    setTimeout(function(){
      console.log("compress has ended")
      console.log("upload has started")

      setTimeout(function(){
        console.log("upload has ended")
      },2000)

    },2000)

},2000)

// in this example, use call setTimeout inside setTimeout inside setTimeout inside setTimeout...
// making a pyramid of doom ie callback hell