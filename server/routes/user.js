const express = require("express");

const router = express.Router();

const users = [];
let id = 0;

router.get("/api/v1/users", (req, res) => {
  return res.json({users});
});

router.get("/api/v1/users/:id", (req, res) => {
  const user = users.find(val => val.id === Number(req.params.id));
return res.json({user});
});

router.post("/api/v1/users", (req, res) => {
  users.push({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    othername: req.body.othername,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    registered: Date.now(),
    isAdmin: false,
    id: ++id
  });
  return res.json({ 
    status: "200",
    message: "User was successfully Created",
    users 
  });
});

router.delete("/api/v1/users/:id", (req, res) => {
  const userIndex = users.findIndex(val => val.id === Number(req.param.id));
  users.splice(userIndex, 1);
  return res.json({ message: "Deleted" });
});

module.exports = router;