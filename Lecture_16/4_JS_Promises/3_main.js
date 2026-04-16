function download(){
    return new Promise((res,rej)=>{
    console.log("download has started")
    setTimeout(function(){
       console.log("download has ended")
       res()
    },2000)
    })
}

function compress(){
    return new Promise((res,rej)=>{
    console.log("compress has started")
    setTimeout(function(){
       console.log("compress has ended")
       res()
    },2000)
    }
    )
   
}

function upload(){
    return new Promise((res,rej)=>{
    console.log("upload has started")
    setTimeout(function(){
       console.log("upload has ended")
       res()
    },2000)
    }
    )
 
}
async function process(){  // async await works only when function returns a promise
await download()
await compress()
await upload()
}

process()