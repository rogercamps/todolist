const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp({ database: 'todolist' })

const tasks = {
  getAll: () => db.any('SELECT * FROM tasks ORDER by note_id'),
  create: (note) => db.oneOrNone('INSERT INTO tasks (note) VALUES ($1) RETURNING note_id', [note]),
  update: (id, note) => db.one('UPDATE tasks SET note=$1 WHERE note_id=$2 RETURNING *', [id, note]),
  deleteTask: (id) => db.none('DELETE from tasks WHERE note_id=$1', [id]),
  completeTask: (id) => db.none('UPDATE tasks SET complete=true WHERE note_id=$1', [id])
}

module.exports = tasks
