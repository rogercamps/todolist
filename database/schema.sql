CREATE DATABASE todolist;

\c todolist;

CREATE table task (
  task_id SERIAL PRIMARY KEY,
  note VARCHAR(1000)
);
