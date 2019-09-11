const router = require('express').Router();

const Users = require('./usersModel.js');

router.get('/', (req, res) => {
  Users.selectAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'an error has been encountered' });
    })
});

module.exports = router;