const http = require("http") // http module ko import kia hai

const server = http.createServer(function(req,res){
    if(req.url == "/"){ // if url is / then show home page
        res.end("home page")
    }
    else if(req.url == "/about"){ // if url is /about then show about page
        res.end("about page")
    }
    else if(req.url == "/login"){ // if url is /login then show login page
        res.end("login page")
    }
    else{
        res.end("404 not found") // if url is not found then show 404 not found page
    }
})

server.listen(3000) // server ko start kia h port 3000 par