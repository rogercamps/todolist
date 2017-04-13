const express = require('express')
const router = express.Router()
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({ database: 'todolist' })

const tasks = {
  getAll: () => {console.log('entered getAll'); return db.any('SELECT * FROM tasks ORDER by task_id')},
  create: (note) => db.oneOrNone('INSERT INTO tasks (note) VALUES ($1) RETURNING task_id', [note]),
  update: (id, note) => db.one('UPDATE tasks SET note=$1 WHERE task_id=$2 RETURNING *', [id, note]),
  deleteTask: (id) => db.none('DELETE from tasks WHERE task_id=$1', [id])
}

module.exports = tasks;
