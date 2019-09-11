const router = require('express').Router();

const Users = require('./usersModel.js');
const restricted = require('../auth/restrictedMiddleware.js');

router.get('/', restricted, (req, res) => {
  const { department, sub } = req.decodedToken;

  if(department === 'admin') {
    Users.selectAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json({ message: 'an error has been encountered' });
      })
  } else {
    Users.findById(sub)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: 'an error has been encountered' });
    })
}
});

module.exports = router;