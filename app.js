const express = require('express')
const path = require('path')
const logger = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const index = require('./routes/index')
const users = require('./routes/users')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/users', users)

app.use(function(request, response, next) {
  const error = new Error("Can\'t find the file.")
  error.status = 404
  next(error)
})

app.use(function(error, request, response, next) {
  console.log(error)
  response.locals.message = error.message
  response.locals.error = request.app.get('env') === 'development' ? error : {}
  response.status(error.status || 500)
  response.render('Something went wrong.')
})

module.exports = app;
