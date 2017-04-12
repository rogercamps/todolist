const express = require('express')
const router = express.Router()

// TODO: implement the rest of the system to handle user creation
// TODO: consider moving this to app.js

// route to get user listing once user system has been implemented
router.get('/', function(request, response, next) {
  response.send('respond with a resource')
})

module.exports = router;
