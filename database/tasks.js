const express = require('express')
const router = express.Router()
const queries = require('./queries.js')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({ database: 'todolist' })

const tasks = {
  getAll: () => db.any(queries.allTasks),
  create: (note) => db.oneOrNone(queries.createTask, [note]),
  update: (id, note) => db.one(queries.updateName, [id, name]),
  deleteTask: (id) => db.none(queries.deleteTask, [id])
}

module.exports = tasks;
