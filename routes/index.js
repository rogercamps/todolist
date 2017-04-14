var express = require('express');
var router = express.Router();
const tasks = require('../database/tasks.js')



router.get('/', function(request, response) {
  tasks.getAll().then(tasks => {
    response.render('index', {
      title: 'To Do List',
      tasks: tasks
    })
  })
  .catch(error => response.json(error))
})

router.post('/createTask', function(request, response) {
  tasks.create(request.body.task).then(() => {
    response.redirect('/')
  })
  .catch(error => response.json(error))
})

router.post('/deleteTask/:id', (request, response) => {
  tasks.deleteTask(request.params.id).then(() => {
    response.redirect('/')
  })
  .catch(error => response.json(error))
})

router.get('/updateTask/:id', (request, response) => {

  Promise.all('SELECT * FROM tasks WHERE note_id=$1').then(() => {
    response.redirect('/')
  })
})


router.post('/updateTask/:id', (request, response) => {
  tasks.update(request.body.task, request.params.id).then(() => {
    response.redirect('/')
  })
  .catch(error => response.json(error))
})

router.post('/completeTask/:id', (request, response) => {
  tasks.completeTask(request.params.id).then(() => {
    response.redirect('/')
  })
  .catch(error => response.json(error))
})

module.exports = router;
