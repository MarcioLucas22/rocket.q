const { Router } = require('express')
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const app = express.Router()

app.get('/', (req, res) => {
  res.render('index', {page: 'enter-room'})
})

app.get('/create-pass', (req, res) => {
  res.render('index', {page: 'create-pass'})
})

app.post('/create-room', RoomController.create)
app.get('/room/:room', RoomController.open)
app.post('/enterroom', RoomController.enter)

app.post('/question/create/:room', QuestionController.create)
app.post('/question/:room/:question/:action', QuestionController.index)


module.exports = app