function download(){
    console.log("download has started")
    setTimeout(function(){
       console.log("download has ended")
    },2000)
}

function compress(){
    console.log("compress has started")
    setTimeout(function(){
       console.log("compress has ended")
    },2000)
}

function upload(){
    console.log("upload has started")
    setTimeout(function(){
       console.log("upload has ended")
    },2000)
}

download()
compress()
upload()

// 2s m run hora hai kyunki sab asynchronous functions hai
// but hm chahye ki download => compress => upload (6s lagni chaiye)
// toh isliye hm callbacks use karte hai



