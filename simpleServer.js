let http = require("http");
//ES5 Style
//let server = http.createServer(function(req,res){
//
//})

//ES6 Style
// https://localhost:8888
let server = http.createServer((req,res)=>{
    console.log("Welcome to web application")
    res.end("Welcome to simple web application")
});

server.listen(8888,()=>console.log("Server running on port number 8888"));