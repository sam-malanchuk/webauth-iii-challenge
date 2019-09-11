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

async function insert(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
