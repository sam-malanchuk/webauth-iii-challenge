const db = require('../database/dbConfig.js');

module.exports = {
  selectAll,
  findBy,
  insert,
  findById
}

function selectAll() {
  return db('users').select('id', 'username', 'department');
}

function findBy(filter) {
  return db('users').where(filter);
}

function insert(user) {
  return db('users').insert(user);
}

function findById(id) {

}