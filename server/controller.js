let welcomeMessage = [ 'Hello, Welcome to the NerdSports Forums' ]
let id = 0


var newDate = function () {
  let date = new Date();
  return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
}

var newTime = function () {
  let date = new Date()
  if (date.getMinutes() <= 9) { var minutes = '0' + date.getMinutes() }
  else { minutes = date.getMinutes() }
  if (date.getHours() === 0) {
    return 12 + ':' + `${minutes}am`
  }
  else if (date.getHours() <= 12) {
    return date.getHours() + ':' + `${minutes}am`
  }
  else { return (date.getHours() - 12) + ':' + `${minutes}pm` }
  // Take spaces out of am pm? maybe?
}

let userMessages = [ { id: 1, text: 'Not a Goose', date: newDate(), time: newTime() } ]
module.exports = {
  readMessage: (req, res) => {
    res.status(200).send(welcomeMessage)
  },
  readUserMessage: (req, res) => {
    console.log('hit get')
    res.status(200).send(userMessages)
  },
  createMessage: (req, res) => {
    console.log('hit post')
    const { text } = req.body
    userMessages.push({ id, text, date: newDate(), time: newTime() })
    id++
    res.status(200).send(userMessages)
  },
  editMessage: (req, res) => {
    console.log('hit put')
    const { id, text } = req.body
    const filteredMessagesIndex = userMessages.findIndex(message => message.id === id)
    console.log(filteredMessagesIndex)
    // let message = userMessages[ filteredMessagesIndex ]
    // console.log(message, 'message')
    userMessages[ filteredMessagesIndex ].text = text
    console.log(userMessages, 'usermessages')
    res.status(200).send(userMessages)
  },
  deleteMessage: (req, res) => {
    console.log('hit delete')
    // const { deletedMessage } = req.body
    
    deleteMessage = userMessages.findIndex((message) => {
      return message.id == req.params.id
    })


    userMessages.splice(deleteMessage, 1)
    res.status(200).send(userMessages)
  },
}