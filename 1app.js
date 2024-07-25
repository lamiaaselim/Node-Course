const express = require("express");

const server = express();

server.listen(8082, () => {
  console.log("I'm listening ..👻");
});

// // Build your Express Middlewares
/* ============ Server Layers ============== */
// // // Frist MW to make login to register url and method
// // // // case 1: loading and print request.url, request.method
// server.use(( request, response)=>{
//     console.log(request.url, request.method); // to register who loggin now
//     response.status(200).json({message : "Hello from Middleware"});
//     // to make response move on second middleware
// })

// // // // case 2: respond on browser and print request.url, request.method
// server.use(( request, response)=>{
//     console.log(request.url, request.method);
//     response.status(200).json({message : "Hello from First Middleware"});
// })

// // // // // case 3: create second middleware => how to move for 2nd middleware
// server.use((request, response, next) => {
//   console.log(request.url, request.method);
//   // response.status(200).json({ message: "Hello from First Middleware" });
// });

// server.use((request, response) => {
//   console.log("authenticated MW");
// });

// // // // case 4: create second middleware => use next to move for 2nd middleware
// server.use((request, response, next) => {
//   console.log(request.url, request.method);
//   // to make response move on second middleware
//   next();
// });
// // Still loading becuase server don't send response
// server.use((request, response) => {
//   console.log("authenticated MW");
// });
