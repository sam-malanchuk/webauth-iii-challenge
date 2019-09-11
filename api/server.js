const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const UsersRouter = require('../users/usersRouter.js');
const AuthRouter = require('../auth/authRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', AuthRouter);
server.use('/api/users', UsersRouter);

server.get('/', (req, res) => {
  res.json({ message: "Use the '/api/users' or '/api/auth' endpoint to get started!"});
});

module.exports = server;
