const express = require("express");
const morgan = require("morgan");

const stdRouter = require("./routes/stdRoute");

const server = express();
// Listening of Server
server.listen(process.env.PORT || 8082, () => {
  console.log("I am listening ... ");
});

//-------------------------------------- server layers
// first MW   logining  url ,method
server.use((request, repsonse, next) => {
  console.log(request.url, request.method);
  next();
});

//********************* routes***********************/

// server.use();
server.use(express.json());
server.use(stdRouter);

/*****************************************************/
//Not Found
server.use((request, repsonse, next) => {
  repsonse.status(404).json({ message: "not found" });
});

//Error MW
server.use((error, request, response, next) => {
  response.status(500).json({ message: "error : " + error });
});
