function download(callback){ // callback => compress
    console.log("download has started")
    setTimeout(function(){
       console.log("download has ended")
       callback(upload)
    },2000)
}

function compress(callback){ // callback => upload
    console.log("compress has started")
    setTimeout(function(){
       console.log("compress has ended")
       callback()
    },2000)
}

function upload(){
    console.log("upload has started")
    setTimeout(function(){
       console.log("upload has ended")
    },2000)
}

download(compress)


// download => compress => upload (6s lag rhe h)
// kyunki download ka callback compress ko call krega and compress ka callback upload ko call krega
// so total 6s lag rhe h

