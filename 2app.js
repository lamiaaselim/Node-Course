const express = require("express");

const server = express();

server.listen(8083, () => {
  console.log("I'm listening ..👻");
});

// // // case 1: create second middleware => use next to move for 2nd middleware
server.use((request, response, next) => {
  console.log(request.url, request.method);
  // to make response move on second middleware
  next();
});
// Still loading becuase server don't send response
server.use((request, response, next) => {
  console.log("authenticated MW");
  next(); // by defualt go to next layer
});

// // Not Found Middleware
server.use((request, response) => {
  response.status(404).json({ message: "Not Fount" });
});

// // // // case 2: create second middleware => use next to move for 2nd middleware
// // // // Make deliberate error => don't use next 
// server.use((request, response, next) => {
//   console.log(request.url, request.method);
//   // to make response move on second middleware
//   next();
// });
// // Still loading becuase server don't send response
// server.use((request, response, next) => {
//   console.log("authenticated MW");
//   // next(); // by defualt go to next layer
//   next(new Error (" you not authenticated")); //jum to MW error
// });

// // Not Found Middleware
// server.use((request, response) => {
//   response.status(404).json({ message: "Not Fount" });
// });

