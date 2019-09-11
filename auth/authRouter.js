const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel.js');

router.get('/', (req, res) => {
  res.json({ message: "Hey, from inside the auth Router!"});
});

router.post('/register', (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 6);

  Users.insert(user)
    .then(createdUser => {
      console.log(createdUser);
      if(createdUser) {
        const token = generateToken(createdUser);
        res.status(201).json({ message: `Thanks for joining ${user.username}, your account has been created!`, token });
      } else {
        res.status(500).json({ message: "Account could not be created" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Account could not be created" });
    });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({username}).first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `You are logged in!`, token });
      } else {
        res.status(401).json({ message: "Username or password incorrect" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Server login error" });
    });
});

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;