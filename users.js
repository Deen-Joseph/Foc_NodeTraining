const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let users = require("./user");

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({message: "Not on list"}); //Status code
    
  }
});


router.post("/", (req, res) => {
  const newUser = {
    // id: uuid.v4(),  

    id:  req.body.id,  

    name: req.body.name,

    email: req.body.email,

    position: req.body.position
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }

  users.push(newUser);

  res.json(users);
});

//Update User

router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updateUser = req.body;

    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updateUser.name ? updateUser.name : user.name;

        user.email = updateUser.email ? updateUser.email : user.email;

        user.position = updateUser.position ? updateUser.position : user.position;

        res.json({ msg: "User updated", user });
      }
    });
  } else {
    res.sendStatus(400);
  }
});

//Delete User

router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    users = users.filter((user) => user.id !== parseInt(req.params.id));

    res.json({
      msg: "User deleted",

      users,
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
