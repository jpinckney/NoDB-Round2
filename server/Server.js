require('dotenv').config()
const { SERVER_PORT } = process.env

const express = require('express')
const app = express()
const ctrl = require('./controller')
app.use(express.json())





app.listen(SERVER_PORT, () => {
  console.log(`server running on port ${SERVER_PORT}`)
})



app.get('/api/readWelcomeMessage',ctrl.readMessage )
app.get('/api/usermessages',ctrl.readUserMessage )
app.post('/api/createMessage', ctrl.createMessage)
app.put('/api/editMessage', ctrl.editMessage)
app.delete('/api/deleteMessage/:id', ctrl.deleteMessage)

