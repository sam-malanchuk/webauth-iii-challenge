const router = require('express').Router();

const Users = require('../users/usersModel.js');

router.get('/', (req, res) => {
  res.json({ message: "Hey, from inside the auth Router!"});
});

router.post('/register', (req, res) => {
  const user = req.body;

  Users.insert(user)
    .then(status => {
      if(status) {
        res.status(201).json({ message: `Thanks for joining ${user.username}, your account has been created!`});
      } else {
        res.status(500).json({ message: "Account could not be created" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Account could not be created" });
    });
});

module.exports = router;