const router = require('express').Router();

const Users = require('../users/usersModel.js');

router.get('/', (req, res) => {
  res.json({ message: "Hey, from inside the auth Router!"});
});

module.exports = router;