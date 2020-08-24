const express = require('express')
const routes = express.Router()
const Chat= require('./controllers/chatController')

routes.post('/', Chat.createMessage )
routes.get('/', Chat.getMessages)

module.exports = routes;