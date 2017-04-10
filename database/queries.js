var tasks = require ('/index.js')
var pgp = require('pg-promise')

function createTask(request, resolve, next) {
  db.one('INSERT INTO tasks (note)' +
  'values(${1})', request.body)
    .then(function () {
      resolve.status(200)
        .json({
          status:'success',
          message:'created one task'
        })
    })
    .catch(function (error) {
      return next(error);
    });
}


function getAllTasks(request, resolve, next) {
  db.any('select * from tasks')
    .then(function (data){
      resolve.status(200)
        .json({
          status:'success',
          data: data,
          message: 'Retrieved all tasks'
        });
    })
    .catch(function (error){
      return next(error);
    });
}

function getOneTask(request, resolve, next) {
  db.one('select ${1} from tasks')
    .then(function (data){
      resolve.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved task'
        });
    })
    .catch(function (error){
      return next(error);
    });
}

function updateTask(request, resolve, next) {
  db.one('UPDATE task SET note=$1 WHERE ID=$2')
    .then(function (data){
      resolve.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Updated task'
        });
    })
    .catch(function (error){
      return next(error);
    });
}

function deleteTask(request, resolve, next) {
  db.none('delete from tasks where id = $1')
    .then(function(result){
      resolve.status(200)
        .json({
          status: 'success',
          message: 'Task removed'
        });
    })
    .catch(function (error){
      return next(error);
    });
}
