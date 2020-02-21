exports.up = function(knex) {
  return (
    knex.schema
      // Projects Table
      .createTable('projects', tbl => {
        // Primary key(PK)
        tbl.increments()
        // Name
        tbl.string('name', 128).notNullable()
        // Description
        tbl.string('description', 255)
        // Completed
        tbl.boolean('completed').defaultTo(false)
      })

      // Resource Table
      .createTable('resource', tbl => {
        // Primary Key(PK)
        tbl.increments()
        // Name
        tbl
          .string('name', 128)
          .unique()
          .notNullable()
        // Description
        tbl.string('description', 255)
      })

      // Task Table
      .createTable('task', tbl => {
        // Primary Key
        tbl.increments()
        // Description
        tbl.string('description', 255).notNullable()
        // Notes
        tbl.string('notes', 255)
        // Completed
        tbl.boolean('completed').defaultTo(false)
        //Project_Id
        tbl
          .integer('project_id')
          .notNullable()
          .unsigned()
          .references('projects.id')
      })

      // Bridge Table
      .createTable('projects_info', tbl => {
        // Primary Key(PK)
        tbl.increments()
        // Resource Id
        tbl
          .integer('resource_id')
          .notNullable()
          .unsigned()
          .references('resource.id')
        tbl
          .integer('task_id')
          .notNullable()
          .unsigned()
          .references('task.id')
      })
  )
}

exports.down = function(knex) {}
