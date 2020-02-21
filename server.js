const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('What up from the server')
})

module.exports = server
