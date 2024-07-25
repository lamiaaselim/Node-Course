const express = require("express");

const server = express();

server.listen(8081 , ()=> {
    console.log("I'm listening ..👻");
})
// Server Layer //

// Frist Middleware // to make login to register url and method
server.use(( request, response, next)=>{
    console.log(request.url, request.method); // to register who loggin now
    // we here reply with response but it not required
    // response.status(200).json({message : "Hello from Middleware"});
    // to make response move on second middleware
    next();
})

// to see how First MW send request to Second MW
// Second Middleware
server.use((request, response, next)=>{
    console.log("authenticated MW");
    // next(); // by defualt go to next layer
    next(new Error (" you not authenticated")); //jum to MW error
})

// Not Found Middleware
server.use((request, response, next)=>{ 
    response.status(404).json({message : "Not Fount"});
    // next();
})

// Error MW
server.use(( error ,request, response, next)=>{
    // response.status(500).json({message : "Error : "});
    // in develpment Time print error 
    response.status(500).json({message : "Error : " + error});
})

// if you want know the problem or real error comment all Error MW 
// and 