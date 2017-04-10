var express = require('express');
var router = express.Router();

var db = require('../database/queries');

router.get('/tasks', db.getAllTasks);
router.get('/tasks/:id', db.getSingleTask);
router.post('/tasks', db.createTask);

//TODO: research router.put vs. router.post
//if router.put does not work, try router.get

router.put('/tasks/:id', db.updateTask);
router.delete('/tasks/:id', db.removeTask);

module.exports = router;
