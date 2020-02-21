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
  Db.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

server.post('/api/resource', (req, res) => {
  Db.addResource(req.body)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(err => {
      res.status(404).json({ message: err })
    })
})

server.get('/api/task', (req, res) => {
  Db.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(400).json({ message: err })
    })
})

server.post('/api/task', (req, res) => {
  Db.addTask(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(err => {
      res.status(406).json({ message: err })
    })
})

module.exports = server
