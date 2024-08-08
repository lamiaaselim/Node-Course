const express = require("express");
const bodyParser = require("body-parser");
// // express has a method called route that creates a route object

const router = express.Router();
bodyParser.json();

const controller = require("./../Controller/stdController");

// // // // Case : 1 => modify server
// server.get("/student", (req, res) => {
//   res.status(200).json({ data: [{ id: 1, name: "xxx" }] });
// });

// server.post("/student", (req, res) => {
//   res.status(200).json({ data: "student added" });
// });

// server.patch("/student", (req, res) => {
//   res.status(200).json({ data: "student updated" });
// });

// server.delete("/student", (req, res) => {
//   res.status(200).json({ data: "student deleted" });
// });

// // // Case 02 => repeat basic routes /student
// router.get("/student", (req, res) => {
//   res.status(200).json({ data: [{ id: 1, name: "xxx" }] });
// });

// router.post("/student", (req, res) => {
//   res.status(200).json({ data: "student added" });
// });

// router.patch("/student", (req, res) => {
//   res.status(200).json({ data: "student updated" });
// });

// router.delete("/student", (req, res) => {
//   res.status(200).json({ data: "student deleted" });
// });

// // // // Case 02 => use express base route
// router
//   .route("/student")
//   .get((req, res) => {
//     res.status(200).json({ data: [{ id: 1, name: "xxx" }] });
//   })
//   .post((req, res) => {
//     res.status(200).json({ data: "student added" });
//   })
//   .patch((req, res) => {
//     res.status(200).json({ data: "student updated" });
//   })
//   .delete((req, res) => {
//     res.status(200).json({ data: "student deleted" });
//   });

// // // Case 02 => Improve your code with express MVC => go to controller
// router
//   .route("/student")
//   .get()
//   .post((req, res) => {
//     res.status(200).json({ data: "student added" });
//   })
//   .patch((req, res) => {
//     res.status(200).json({ data: "student updated" });
//   })
//   .delete((req, res) => {
//     res.status(200).json({ data: "student deleted" });
//   });

// router.route("/student/:id")
//   .get(controller.getAllStudents)
//   .post(controller.addStudent)
//   .patch(controller.updateStudent)
//   .delete(controller.deleteStudent);

// // use colon : to send parameters and this mean it's not constant part from url
// router
//   .route("/student/:id")
//   .get(controller.getAllStudents)
//   .post(controller.addStudent)
//   .patch(controller.updateStudent)
//   .delete(controller.deleteStudent);

// // // use colon : to send parameters and make it optional
// router
//   .route("/student/:id?")
//   .get(controller.getAllStudents)
//   .post(controller.addStudent)
//   .patch(controller.updateStudent)
//   .delete(controller.deleteStudent);

// router
//   .route("/student")
//   .get(controller.getAllStudents)
//   .post(controller.addStudent)
//   .patch(controller.updateStudent);

// router.get("/student/:id", controller.getStudentById);
// router.delete("/student/:id", controller.deleteStudent);

// router
//   .route("/student")
//   .get(controller.getAllStudents)
//   .post(controller.addStudent)
//   .patch(controller.updateStudent);

// router
//   .route("/student")
//   .get(controller.getAllStudents)
//   .post(express.json(), controller.addStudent)
//   .patch(controller.updateStudent);

router
  .route("/student")
  .get(controller.getAllStudents)
  .post(controller.addStudent)
  .patch(controller.updateStudent);

router
  .route("/student/:id")
  .get(controller.getStudentById)
  .delete(controller.deleteStudent);
module.exports = router;

