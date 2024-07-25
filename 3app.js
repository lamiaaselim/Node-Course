// So We Need to create Error MW

const express = require("express");

const server = express();

server.listen(8084, () => {
  console.log("I'm listening ..👻");
});

server.use((request, response, next) => {
  console.log(request.url, request.method);
  // to make response move on second middleware
  next();
});
// Still loading becuase server don't send response
server.use((request, response, next) => {
  console.log("authenticated MW");
  next(new Error(" you not authenticated")); //jum to MW error
});

// Not Found Middleware
server.use((request, response) => {
  response.status(404).json({ message: "Not Fount" });
});

// Error MW
server.use((request, response, next) => {
  response.status(500).json({ message: "Internal Server Error" });
  // // what's must told express the difference between not Fount and error MW
});
