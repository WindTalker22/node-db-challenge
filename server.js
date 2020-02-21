const express = require('express')

const server = express()

const Db = require('./routes/projects-model')

server.use(express.json())

server.get('/', (req, res) => {
  res.send('What up from the server')
})

server.get('/api/projects', (req, res) => {
  Db.getProjects()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

server.post('/api/projects', (req, res) => {
  Db.addProject(req.body)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})
server.get('/api/resource', (req, res) => {
  res.status(200).json({ message: 'working' })
})

server.post('/api/resource', (req, res) => {
  res.status(200).json({ message: req.body })
})
server.get('/api/task', (req, res) => {
  res.status(200).json({ message: 'working' })
})

server.post('/api/task', (req, res) => {
  res.status(200).json({ message: req.body })
})

module.exports = server
