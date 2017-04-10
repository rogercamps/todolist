CREATE DATABASE todolist;

\c todolist;

CREATE table tasks (
  task_id SERIAL PRIMARY KEY,
  note VARCHAR(1000)
);
