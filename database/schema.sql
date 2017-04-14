DROP DATABASE if exists todolist;
CREATE DATABASE todolist;

\c todolist;

CREATE table tasks (
  note_id SERIAL PRIMARY KEY,
  note VARCHAR(100),
  complete BOOLEAN default false
);
