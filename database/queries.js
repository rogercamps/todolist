const queries = {
  allTasks: 'SELECT * FROM tasks ORDER by id',
  createTask: 'INSERT INTO tasks (note) VALUES ($1) RETURNING task_id',
  updateNote: 'UPDATE tasks SET note=$1 WHERE task_id=$2 RETURNING *',
  deleteTask: 'DELETE from tasks WHERE id=$1'
}

module.exports = queries;
