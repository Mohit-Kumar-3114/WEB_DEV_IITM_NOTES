// CALLBACK HELL // PYRAMID OF DOOM

//  This is a callback hell because the code is nested too deep and it is difficult to read and understand.

function download(cb){
    console.log("download has started")
    setTimeout(()=>{
        console.log("download has finished")
        cb()
    },2000)
}

function compress(cb){
    console.log("compress has started")
    setTimeout(()=>{
        console.log("compress has finished")
        cb()
    },2000)
}


function upload(){
    console.log("upload has started")
    setTimeout(()=>{
        console.log("upload has finished")
    },2000)
}

download(()=>{
    compress(()=>{
        upload()
    })
})

// This is called callback hell because the code is nested too deep and it is difficult to read and understand. 