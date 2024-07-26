// Case 01 => you Move callback function => what you need here
// ase 0 2=> Export and Query string vs Query params
exports.getAllStudents = (req, res) => {
  // //   // 1. Query String
  //   console.log(req.query);
  // //   // 2. Query Parameters and error with query string becuase it's mandatory
  //   console.log(req.params);
  res.status(200).json({ data: [{ id: 1, name: "xxx" }, { id: 2, name: "yyy" }, { id: 3, name: "zzzz" }] });
};

exports.addStudent = (req, res) => {
  res.status(200).json({ data: "student added" });
};
exports.deleteStudent = (req, res) => {
  res.status(200).json({ data: "student deleted" });
};
exports.updateStudent = (req, res) => {
  res.status(200).json({ data: "student updated " });
};
