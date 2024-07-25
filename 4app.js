// So We Need to create Error MW

const express = require("express");

const server = express();

server.listen(8085, () => {
  console.log("I'm listening ..👻");
});

server.use((request, response, next) => {
  console.log(request.url, request.method);
  // to make response move on second middleware
  next(new Error(" you not logined")); //jum to MW error
});
// Still loading becuase server don't send response
server.use((request, response, next) => {
  console.log("authenticated MW");
  next(); // by defualt go to next layer
});

// Not Found Middleware
server.use((request, response) => {
  response.status(404).json({ message: "Not Fount" });
});

// Error MW
server.use((error, request, response, next) => {
  // response.status(500).json({ message: "Internal Server Error" });
  // // in develpment Time print error
  response.status(500).json({ message: "Error : " + error });
});
