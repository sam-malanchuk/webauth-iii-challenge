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

}

function insert(user) {

}

function findById(id) {

}