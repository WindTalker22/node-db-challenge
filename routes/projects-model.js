const db = require('../data/db-config')

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks
}

function addResource(body) {
  return db('resource').insert(body)
}

function getResources() {
  return db('resource')
}
function addProject(body) {
  return db('projects').insert(body)
}

function getProjects() {
  return db('projects')
}
function addTask(body) {
  return db('task').insert(body)
}

function getTasks() {
  return db('projects')
    .join('task', 'task.project_id', 'projects.id')
    .select(
      'task.*',
      'projects.name as project_name',
      'projects.description as project_description'
    )
}
