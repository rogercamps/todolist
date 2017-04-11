const tasks = require('/index.js')
const pgp = require('pg-promise')

function createTask(request, response, next) {
  db.one('INSERT INTO tasks (note)' +
      'values(${1})', request.body)
    .then(function() {
      response.status(200)
        .json({
          status: 'success',
          message: 'created one task'
        })
        // response.render
    })
    .catch(function(error) {
      return next(error);
    });
}


function getAllTasks(request, response, next) {
  db.any('select * from tasks')
    .then(function(data) {
      response.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all tasks'
        });
    })
    .catch(function(error) {
      return next(error);
    });
}

function getOneTask(request, response, next) {
  db.one('select ${1} from tasks')
    .then(function(data) {
      response.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved task'
        });
    })
    .catch(function(error) {
      return next(error);
    });
}

function updateTask(request, response, next) {
  db.one('UPDATE task SET note=$1 WHERE ID=$2')
    .then(function(data) {
      response.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Updated task'
        });
    })
    .catch(function(error) {
      return next(error);
    });
}

function deleteTask(request, response, next) {
  db.none('delete from tasks where id = $1')
    .then(function(result) {
      response.status(200)
        .json({
          status: 'success',
          message: 'Task removed'
        });
    })
    .catch(function(error) {
      return next(error);
    });
}
