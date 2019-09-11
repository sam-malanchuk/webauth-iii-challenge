const router = require('express').Router();

const Users = require('./usersModel.js');

router.get('/', (req, res) => {
  res.json({ message: "Hey, from inside the users Router!"});
});

module.exports = router;